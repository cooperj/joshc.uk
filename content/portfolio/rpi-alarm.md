---
title: Raspberry Pi Burglar Alarm
description: Using a Raspberry Pi, I created a burglar alarm system which alerts the homeowner when there is a potential issue at their house.
icon: /assets/images/alarm6.png
publishDate: 2021-06-07T23:11:28Z
---

# What is the project?

I created a burglar alarm system which alerts the homeowner when there was an issue at their house.

# How does the product work?

Using a Raspberry Pi, I wrote a program which connected the [Twilio API](https://www.twilio.com/docs) with sensors and electronics which are connected to the [Raspberry Pi](https://www.raspberrypi.org/).

If there is motion detected, there is a short delay to see if the button to disarm the alarm is pressed, if it is there is no alarm triggered. The alarm can even be disarmed before the person even enters the building, this is because of the use of the
RF fob.

If the alarm is sounded, either automatically, or by pressing the panic button, the loud siren is activated and a message is sent to the phone number configured.

The text message is sent through [Twilio](https://www.twilio.com), a cloud service, which allowed me to get a virtual phone number, which I could use to send messages.

This allows for the Pi to not need to connect to the GSM network, as it works directly with Wi-Fi at the installed house.

<img class="sideImageForPortfolio portfolioPageImage" src="/assets/images/alarm6.png" alt="the alarm full assembled and mounted to a wall.">

<img class="smallPortfolioPageImage" src="/assets/images/alarm2.jpg" alt="the inside of the alarm">

<img class="smallPortfolioPageImage" src="/assets/images/alarm3.jpg" alt="one of the circuit boards created">

<img class="smallPortfolioPageImage" src="/assets/images/alarm4.jpg" alt="sample text message which could be sent">

<img class="smallPortfolioPageImage" src="/assets/images/alarm5.jpg" alt="remote keyfob for interacting with the alarm">
