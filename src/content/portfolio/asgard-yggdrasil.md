---
title: Asgard & Yggdrasil
description: Computing Lab Timetabling and Management
fromDate: 2024-01-10
active: true
draft: false
tags:
  - typescript
  - react
  - docker
icon: /images/asgard-yggdrasil/y2_thumb.webp
headerImage: /images/asgard-yggdrasil/y2_header.webp
---

There's two distinct components; specifically Asgard & Yggdrasil. Both tools are designed to enhance the student experience within the Computing Labs at the University of Lincoln. At its heart, the project aims to make lab spaces more engaging, informative, and accessible by providing students with real-time information about room availability, upcoming sessions, and activity across the School's computing facilities.

The system powers a network of displays (which run the display software we refer to as Yggdrasil) throughout the building, helping students quickly find available spaces, check timetables, and stay informed about important announcements.

Since 2024, I have been managing the system and have substantially rewrote and redesigned the backend systems. My improvements have made it so the players are significantly more secure (by adding authentication via role-based-access-control), and generalizing the system to allow for more rooms and displays to be added providing a more personal experience to each display.

This was a keen point where a rewrite was beneficial so this was done using Typescript, Drizzle ORM, MySQL and Express.

<div class="flex items-center justify-center">
  <a href="https://github.com/socstech/asgard" class="button" target="_blank">
    <span>View the Asgard Repository</span>
  </a>
</div>
