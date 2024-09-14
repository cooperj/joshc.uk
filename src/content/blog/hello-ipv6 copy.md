---
title: Hello again
description: I Configure and Learn about IPv6 - and complain about how it doesn't yet work properly at home. I Configure and Learn about IPv6 - and complain about how it doesn't yet work properly at home. I Configure and Learn about IPv6 - and complain about how it doesn't yet work properly at home.
pubDate: 2021-12-06
update: 2024-09-07
draft: false
tags: 
    - test
---

So if you didn't know already <abbr title="Internet Protocol version 6">IPv6</abbr> is - it's the ~~new~~ [old](https://www.techrepublic.com/article/explore-ipv6-with-windows-xp/) standard to replace <abbr title="Internet Protocol version 4">IPv4</abbr>.

My ISP doesn't _yet_ provide me with <abbr title="Internet Protocol version 6">IPv6</abbr> in the UK, but a bunch are slowly rolling it out, especially with mobile carriers. So it is a nice thing to understand now - before it is required.

Before being able to work with <abbr title="Internet Protocol version 6">IPv6</abbr> I need to ensure I can connect with it.

## Mobile Data

Hey! This is easy - my phone plan gives me <abbr title="Internet Protocol version 6">IPv6</abbr> access - this one has been done for me.

And, it works invisibly - perfect!

## VPS

I have a <abbr title="Virtual Private Server">VPS</abbr> that runs some services for me in the <abbr title="Someone else's computer">cloud</abbr> - it would be nice to have access for

![IPv6 Address for eth0](/images/hello-ipv6/vps-ip.webp)

Ok, just had to configure my DNS to include an `AAAA` record for the severs IP and not just an `A` record. And now it works! 🎉

## Home

Ah - there's no support. So what I did to get around this was go to [Hurricane Electric's Tunnel Broker Service](https://tunnelbroker.net/), and sign up for an account. I then configured this on my home's pfSense router.

And then to test it was working fully working before transitioning the whole network - and mainly to avoid my house mates getting annoyed - I limited the connectivity down to its own <abbr title="Virtual Local Area Network">VLAN</abbr> so I could test it safely.

So what I did was create the network without any IPv4 to test it on a per-device basis... The first device I tested was my Nintendo Switch. It didn't support IPv6.

This is not surprising, but is still upsetting; and [a comment posted to Reddit 6 years ago](https://www.reddit.com/r/ipv6/comments/5w70gs/comment/de7sm8e/) said something on the lines of "I'd be surprised if they know how to traverse a firewall"... oh, we know now.

They actually [ask in their documentation](https://www.nintendo.co.uk/Support/Nintendo-Switch/How-to-Set-Up-a-Router-s-Port-Forwarding-for-a-Nintendo-Switch-Console-1498000.html) to open all the ports from `1024` to `65535` 😳

So after doing this, only half of the internet works... Mastodon, Google and this site and my connection to my VPS work, so it's perfect and it is everyone else's fault. 😅

<div class="tweet">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I run an IPv6-only vlan and wifi network, with NAT64 so it can even communicate back to the 20th century. There&#39;s no excuse for devices on it not to work (and it&#39;s the first thing I do with any newly-arrived beta test unit before filing bugs if appropriate).</p>&mdash; David Woodhouse #FBPE (@dwmw2) <a href="https://twitter.com/dwmw2/status/1594605679603580934?ref_src=twsrc%5Etfw">November 21, 2022</a></blockquote>
</div>

I asked this on Twitter (and Mastodon) and was replied to by David, and they suggested that I should configure [NAT64](https://en.wikipedia.org/wiki/NAT64).

And also, when I'm going via HE.net's Tunnel Broker, there are a few problems; but it's IPv6!

The two biggest ones are the connection speed is slow, and my IP location is in the States (even though I'm popping out in London?)

I was suggested to try Route48 - that will be a next step.

<div class="tweet">
<blockquote class="twitter-tweet"><p lang="und" dir="ltr">try <a href="https://route48.org/">route48.org</a></p>&mdash; k0x (@k0xak) <a href="https://twitter.com/k0xak/status/1594597825094062082?ref_src=twsrc%5Etfw">November 21, 2022</a></blockquote>
</div>

But for now, I have a `/48` which is broken up for all my smaller networks, and I can just turn the v6 WAN interface on and off depending on if I/we want to use dual stack (v6 and v4).

Sadly, it is _unlikely_ that my home's internet will get <abbr title="Internet Protocol version 6">IPv6</abbr> for a while, and it may never get it.

This is because it requires extra thought to provide v6 service, compared to v4 - which has been standard and expected for [too long](https://en.wikipedia.org/wiki/IPv4_address_exhaustion) but still works, and there's been enough bodges over the years with things such as [CGNAT](https://en.wikipedia.org/wiki/Carrier-grade_NAT) that for most people - there's no difference.

## Certification

Another service that Hurricane Electric do is provide <abbr title="Internet Protocol version 6">IPv6</abbr> Certification - it's probably nothing super special, but I managed to complete the way up to `Explorer` without spinning up a temporary server, so that will be the next step!

## Next Steps

So, my next steps are:

- To, complete my HE <abbr title="Internet Protocol version 6">IPv6</abbr> Certification
- configure [NAT64](https://en.wikipedia.org/wiki/NAT64) routing for my v6 only network.
- Migrate to Route48 _?_
