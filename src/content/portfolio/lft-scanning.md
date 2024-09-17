---
title: Automatic scanning of Lateral Flow Tests
description: "Scanning of a test cartridge to automate both the data collection and abstract the reading of the result."
pubDate: 2021-12-30
draft: false
icon: /images/lft-scanning/icon.webp
headerImage: /images/lft-scanning/cover.webp
tags:
  - prototyping
  - image-processing
---

## What is the project?

The project was a short-lived prototype to see whether the idea was feasible and whether it would make sense to go further.

## The Design

The process is that a user takes a picture of their Lateral Flow Test so that it can be reported to the health department.

This would have the benefit of allowing visually impaired people able to administer and register their test without any aid; as they could receive voice prompts to align the test.

The reason behind the testing was due to the high count of tests going unreported.

## Prototype

I built a prototype in Python that reads the result from a photo, you can [read more on my blog](/blog/lft-scanning).

## Success?

In the end, the prototype proved to be unsuccessful. This was because there was too much variation within the images captured.

That could be overcome, but wouldn't be something I would feel right doing; due to being unable to ensure its accuracy.

If I was to do this again, I would build a 'capture app' to run on my Phone and do the processing on-device compared to on a server somewhere else.

_[Update]: As of the 1st April, general testing has stopped in the UK - stopping any further development._
