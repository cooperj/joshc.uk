---
title: What's in my Homelab 2025?
pubDate: 2025-12-31
draft: false
fmContentType: blog
tags:
  - homelab
  - networking
description: A candid look at my 2025 homelab – UniFi networking, Proxmox cluster, Synology NAS, Home Assistant, and the lessons learned along the way.
---

I have been running a homelab for years, starting with a single Raspberry Pi and my old Mac Mini running Windows Server 2012R2 with HyperV tucked away in a cupboard. Over time, I’ve built and torn down many setups: Minecraft servers, Plex, home automation, and numerous other services. Along the way, I’ve learned what works, and what definitely doesn’t (including opening too many ports in my firewall).

## 1. Hardware

I think to give you some context, I should tell you what I currently have hardware wise and how it's connected. This isn't by any means a comprehensive diagram, but it should make it easier to understand what I have.

```mermaid
flowchart LR
   accTitle: Network Topology Diagram
   accDescr: Home network showing connections between devices
   internet["BT VDSL"] --> ucg_max["UCG Max"]
   ucg_max -- 1GbE --> usw_up["USW Lite – Upstairs"]
   ucg_max -- "2.5GbE" --> pc_mf["Minisforum UM690S"]
   usw_up -- "2x 1GbE – Agg" --> usw_down["USW Lite – Downstairs"]
   usw_down -- "2x 1GbE – Agg" --> nas["Synology DS918+"]
   usw_down --> uap_down(("U6 Lite"))
   usw_down -- 1GbE --> pc_tt["Topton N5105"]
   usw_up --> uap_up(("U6 Lite"))
   usw_up -- 1GbE --> pc_mm["Mac Mini 2012"]

   internet@{ icon: "lucide:globe-2", pos: "b"}
   nas@{ icon: "lucide:hard-drive", pos: "b" }
   uap_down@{ icon: "lucide:wifi", pos: "b"}
   uap_up@{ icon: "lucide:wifi", pos: "b"}
   style pc_mf fill:#FFE0B2
   style nas stroke-width:2px,stroke-dasharray: 2
   style uap_down stroke-width:2px,stroke-dasharray: 2
   style pc_tt fill:#FFE0B2
   style uap_up stroke-width:2px,stroke-dasharray: 2
   style pc_mm fill:#FFE0B2
```

### UniFi (All the Things)

This year I have finally replaced my old [Edgerouter-X](https://techspecs.ui.com/uisp/wired/er-x?ref=joshc.uk) with a new [UCG Max](https://uk.store.ui.com/uk/en/category/cloud-gateways-compact/collections/cloud-gateway-max?ref=joshc.uk) from UniFi. I quite like it – it just works, and has a nice interface. The real reason why I swapped was move away from using a Docker based UniFi network only controller, and move to a fully UniFi managed system, with a single dashboard and mobile app to manage it.

I added this to my existing setup with [2x U6 Lite APs](https://uk.store.ui.com/uk/en/category/all-wifi/products/u6-lite?ref=joshc.uk) and [2x USW Lite PoE Switches](https://uk.store.ui.com/uk/en/category/switching-utility/products/usw-lite-16-poe?ref=joshc.uk).

I have a switch and an AP on each floor of my house, with the switches connected to each other with 2 ports aggregated together, I did this for both redundancy and more bandwidth – This was done before 2.5GbE became an easy to obtain thing. And, if I were to replace the switches I would swap for something that supported at least 2.5GbE.

And one feature that has become quite useful as a side effect of swapping to the new controller is the ability to configure ACLs on the switches, which takes some load from the router.

### Synology NAS

For all my storage needs, I have a Synology NAS it is a DS918+ that I upgraded the RAM in so that I could run more VMs, but I have since migrated away from doing this – focusing on having the NAS just be a NAS.

It has 3x 4TB drives that are configured in Synology Hybrid Raid (SHR) which is essentially BTRFS under the hood.

I think it's pretty good – but with the [enforcement of using Synology branded/certified drives (source: Tom's Hardware)](https://www.tomshardware.com/pc-components/nas/synology-requires-self-braded-drives-for-some-consumer-nas-systems-drops-full-functionality-and-support-for-third-party-hdds?ref=joshc.uk) and the fact I'm using less and less Synology made applications, is making me question if I would purchase another one and instead build something with True NAS?

### Proxmox Cluster

Where I have moved the VMs to is my Proxmox VE cluster, this is made of the following three machines.

| Node                     | CPU                 | Memory                   | Storage         |
| ------------------------ | ------------------- | ------------------------ | --------------- |
| **Minisforum UM690S**    | AMD Ryzen 9 6900HX  | 32 GB DDR5 @ 4800 MT/s   | 1 TB NVMe SSD   |
| **Topton N5105**         | Intel Celeron N5105 | 16 GB DDR4               | 1 TB SATA SSD   |
| **Mac mini (Late 2012)** | Intel Core i5-3210M | 10 GB DDR3 (2 GB + 8 GB) | 250 GB SATA SSD |

The Minisforum PC was purchased specifically for running VMs – it's nice and powerful, but is small and power efficient.

The Topton N5105 machine was originally used as a pfSense router and Proxmox host, but I decided to go against mixing my router and VM hosts to avoid annoying my family and taking the internet out due to a misconfiguration.

The Mac mini wasn't originally planned to be a part of the cluster, but I added this simply to maintain Quorum of the cluster, it doesn't typically run much mainly a container running Uptime Kuma, which monitors the cluster (among other things).

### Raspberry Pi 2

Also outside the cluster, I have an old Raspberry Pi 2, this is the first Pi I bought, and has been chugging along ever since February 2015. I originally bought this to run Home Assistant, which wasn't as good as it is now – more about that later, but I am currently using Apple Home.

So this Pi is just acting as a [Homebridge]((https://homebridge.io?ref=joshc.uk) server, to connect non-HomeKit devices into Apple Home. Originally I ran more through it, but now it runs the [`homebridge-tplink-smarthome`](https://github.com/plasticrake/homebridge-tplink-smarthome) and [`homebridge-temperature-sensor-dht`](https://github.com/RaresAil/homebridge-temperature-sensor-dht) plugins.

The main purpose is to run the bridge for TP-Link HS100 smart plugs that I have bought about five over the years (but do not go out you're way to buy them now! Go buy something Matter or Zigbee supported, as they decided to try and close up the local API. Vote with your wallet, but don't replace what doesn't need replacing) and now need a way to keep them working.

The other thing is that it hosts a DHT22 sensor, but I plan on replacing this with the exact same sensor connected to an ESP32 running ESP Home or something that supports Matter out of the box.

## 2. Apps and Services

So over the years, I've run stuff, and it's "fell over" and I've not been the best at keeping it alive, it's a _lab_ after all, but here are the tools that I actually use and have fixed when they broke!

The biggest tool that I regret not picking up for the longest time is [Home Assistant](https://www.home-assistant.io?ref=joshc.uk), practically all the problems I had with it previously have now been fully resolved thanks to Matter and the managed HAOS, that takes Home Assistant and turns it into a nice to deploy 'set it and forget it' appliance. I want to use this alongside Apple HomeKit as this is what my family have got used to as we have been using [Homebridge](https://homebridge.io?ref=joshc.uk).

The other service I run is [Scrypted](https://github.com/koush/scrypted); this is an awesome tool to allow me to bring some generic IP cameras into the Apple Home app and Home Assistant. I find it to be super quick and reliable.

Other stuff I run are;

- [Traefik proxy](https://traefik.io/traefik?ref=joshc.uk) which is super useful for giving random services an SSL certificate with Lets Encrypt for access from my LAN, most of these services are being defined by Docker configs but stuff such as my NAS's admin interface is configured by the config file.

- [Change Detection](https://github.com/dgtlmoon/changedetection.io) is great, I've run it for a while and I need to rebuild by config to get a web driver working so I can get visual changes and not just text.

- [Uptime Kuma](https://uptime.kuma.pet/), a really useful, simple and cheap uptime monitor – Useful for telling me I've broken something again.

- And finally I run an SMTP relay, this allows me to configure containers to send me emails without needing to set them up one by one with my email provider (AWS SES).

## 3. Problems and Plans

### Proxmox

Some of the VMs I run are configured for High-Availability (HA), but this isn't working properly because the VMs have to be stored on the NAS which the whole point of the cluster was to remove the single point of failure, but it is there but with a lot more latency as it's now not on the same machine. A solution is to actually pool the storage together from each of the nodes using something such as Ceph. But, I need to re-look into my SSD situation.

The other problem is the latency between nodes, they should all be moved to be closer together and on the same switch. The problem that this causes is sometimes the latency gets slightly too much and the nodes have to take a second to resync. I would also create a faster connection between the nodes, at least 2.5GbE if not USB 4 or Thunderbolt.

The Mac mini isn’t ideal and doesn’t contribute much to the workload, and should be decommissioned and potentially replaced, or otherwise 'tainted'.

There's also no access to the GPU for VMs on Proxmox as the GPU cannot be separated and passed through. This effectively means that transcoding video for services such as Scrypted, and it could be easily better by just accessing the GPU.

And a lot of what I am running is in a single docker VM (originally running on the NAS) that is being moved between machines when they fail or otherwise need to migrate.

There are two solutions for this: either separate every single 'service' into its own VM and manage each VM as independently and let HA manage that, or use containers directly on the machine, and I like containers!

But the question now is, how are you going to manage the containers? I am currently planning on using Kubernetes, but other contenders are Docker Swarm and Proxmox's new OCI support. But Kubernetes is currently ahead in terms of career development and in terms of community support.

### Home Automation

So I have recently started running Home Assistant again, and since I first and last used it seriously in about 2017, it has grown to be an incredibly strong choice and part of that is the ecosystem around HAOS. Currently, I am running: Home Assistant, Homebridge and Scrypted, and all the automations are over the place some in Home Assistant, some in HomeKit.

I am hoping that Home Assistant can be used to consolidate my requirements for Home Automation including Homebridge. But, the problem with this is deploying it to Kubernetes is that the easiest option is to deploy just the container. Doing this loses some of the nice to haves of HA such as Add-ons. So my current plan is to run HAOS as a VM still, but manage it with Kubernetes using [KubeVirt](https://kubevirt.io?ref=joshc.uk) – this would also be my go-to method for running other non-containerise-able appliances and test machines.

Scrypted can be moved into Kubernetes with a little bit of Helm wrangling as they build a Docker container and provide a Docker Compose file. I would use this inside of Home Assistant, but due to HA being in a VM I would have the same problems of not being able to use the iGPU.

### IPv6

I haven't set this up again. Using HE.net's Tunnel Broker is just too slow to make it practical to use, so where I need to use IPv6 I connect to a VPN or tether from my phone and rely on legacy IPv4 for everything.
