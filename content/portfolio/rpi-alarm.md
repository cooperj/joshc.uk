---
title: Raspberry Pi Burglar Alarm
description: Using a Raspberry Pi, I created a burglar alarm system which alerts the homeowner when there is a potential issue at their house.
icon: /assets/images/rpi-alarm/case.webp
publishDate: 2018-11-11
draft: false
---

## What is the project?

I created a burglar alarm system which alerts the homeowner when there was an issue at their house.

## How does the product work?

Using a Raspberry Pi, I wrote a program which connected the [Twilio API](https://www.twilio.com/docs) with sensors and electronics which are connected to the [Raspberry Pi](https://www.raspberrypi.org/).

If there is motion detected, there is a short delay to see if the button to disarm the alarm is pressed, if it is there is no alarm triggered. The alarm can even be disarmed before the person even enters the building, this is because of the use of the
RF fob.

If the alarm is sounded, either automatically, or by pressing the panic button, the loud siren is and a message is sent to the phone number configured.

The text message is sent through [Twilio](https://www.twilio.com), a cloud service, which allowed me to get a virtual phone number, which I could use to send messages.

This allows for the Pi to not need to connect to the GSM network, as it works directly with Wi-Fi at the installed house.

<div class="gallery">

<div class="control-buttons">
    <span><a onclick="plusSlides(-1)">&#10094;</a></span>
    <span id="slide-counter">1/5</span>
    <span><a onclick="plusSlides(1)">&#10095;</a></span>
</div>

![the alarm full assembled and mounted to a wall](/assets/images/rpi-alarm/case.webp)
![the inside of the alarm](/assets/images/rpi-alarm/inside.webp)
![one of the circuit boards created](/assets/images/rpi-alarm/daughter-board.webp)
![sample text message which could be sent](/assets/images/rpi-alarm/sms.webp)
![remote keyfob for interacting with the alarm](/assets/images/rpi-alarm/remote.webp)

</div>

<script src="/assets/scripts/slideshow.js">
