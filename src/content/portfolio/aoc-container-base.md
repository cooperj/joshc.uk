---
title: AOC Container Base
description: Better ROS enabled containers for L-CAS and beyond
fromDate: 2025-12-01
active: true
draft: false
tags:
  - ai
  - robotics
  - python
  - docker
icon: /images/aoc_thumb.webp
---

> Agri-OpenCore (AOC) is funded by InnovateUK (<a href="https://gtr.ukri.org/projects?ref=10041179" target="_blank">Project number: 10041179</a>, total £3,866,817) as part of the DEFRA "Farming Innovation Programme - large R&D partnership projects"

As part of my work on [Agri-OpenCore](https://agri-opencore.org), I delivered [AOC Container Base](https://github.com/LCAS/aoc_container_base/), a collection of reusable Docker images for ROS based robotics software. The goal was to make it easier to build dependable containerised applications without starting from scratch each time. That is especially useful in robotics, where repeatable environments matter when moving between development, testing, and deployment.

The stack is built around a simple pattern: standard base images such as: the default upstream ROS or NVIDIA CUDA image which are combined into a few purpose built images. That makes it possible to choose between a minimal ROS runtime and a CUDA-enabled image for GPU-heavy workloads. With the option to activate a fuller desktop-style ROS image when graphical tooling is needed. It keeps the setup flexible while still remaining consistent.

One of the more useful pieces is the support for graphical workflows. The repository includes a "VNC" image ([`lcas.lincoln.ac.uk/vnc`](https://github.com/LCAS/aoc_container_base/blob/main/vnc.dockerfile)), that can be used to expose X11 applications in a browser, which is helpful for remote monitoring or development.

The problem we had before I built this, we would use a single large container that runs everything on top of the robot, not allowing for isolated development to happen effectively.

The project is designed to be practical rather than overly abstract. It gives teams a common base for developing, testing, and deploying robotics software in containers, whether they are working locally or on a platform with limited resources. That makes it a useful foundation for both research projects and more production-oriented deployments.

<div class="flex items-center justify-center">
  <a href="https://github.com/lcas/aoc_container_base" class="button" target="_blank">
    <span>View repository</span>
  </a>
</div>
