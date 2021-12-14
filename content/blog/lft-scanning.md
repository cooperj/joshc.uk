---
title: Automatic scanning of Lateral Flow Tests
description: "I spent one weekend building a system to automatically scan asymptomatic covid tests."
publishDate: 2021-10-24
draft: false
icon: /images/lft-scanning/icon.webp
---

## Introduction

So it all started from me seeing this tweet.

[![Tweet from Will, two pictures, first picture 2 positive lateral flow covid tests, second picture Phil Mitchell (from eastenders) looking pensive](/images/lft-scanning/willne-tweet.webp)](https://twitter.com/willne/status/1414232187491266560)

I had a brainwave, and thought to myself; "Why can't we just take a picture of the tests to record it?"

Currently in the UK as of October 2021, there is two types of tests that the public can access the first being a **Lateral flow test**, and a **PCR test**.

If you have symptoms of the coronavirus you *must* take a PCR test. Samples for these can be collected anyway such as: at home, at a care home, or at a dedicated testing site, but these tests have to be **sent away** to have the result read at a laboratory.

If you do not have symptoms, you can complete a lateral flow test. These are decided to work best for patients who are currently <abbr title="Displaying no symptoms">asymptomatic</abbr>. These types of tests, can be completed anywhere and **do not** need to be sent away. This means that the result can be received within 30 minutes from taking the test. 

It is very popular to do these tests at home, with my University closing their on campus testing centre this week.

After a test has been taken, the results should be recorded on the [NHS Test & Trace website](https://gov.uk/report-covid19-result) (or via calling 119). This allows the government to do important stuff, such as analysing the distribution of the virus.

In England alone, it was reported by the National Audit Office that, in the period of 1st March to 30th May 2021, only 14% *(96 million)* of distributed lateral flow tests *(691 million)* where reported back to NHS Test & Trace.

They estimate that 655 million tests would have been used, so that leaves a massive **559 million** unreported tests.

The number of tests not being reported is described as "deeply disappointing" by Meg Hillier to The Guardian, as "[the] budget remains unspent despite the continued use of costly consultants and high levels of unused capacity in the system"

Citations:
- [National Audit Office (2021), Test and trace in England - progress update (p.g. 7)](https://www.nao.org.uk/wp-content/uploads/2021/06/Test-and-trace-in-England-progress-update.pdf)

- [Syal, R. (2021), Almost 600m NHS home Covid tests unaccounted for, auditors reveal (The Guardian)](https://www.theguardian.com/society/2021/jun/25/almost-600m-nhs-home-covid-tests-unaccounted-for-auditors-reveal)

My hypothesis is that either either people are either not reporting their tests is because it is difficult to do so or that they are not using the tests provided.

For this exercise I'm gonna follow the National Audit Office's estimation of majority of testing being used and not reported.

## My Aims

I aim to create a system that makes it much easier to record a test result by taking a picture.

In practise this would be built into an existing service such as the [NHS App](https://www.nhs.uk/apps-library/nhs-app/). The app could be the targeted platform as it's typically delivered as a native mobile application (but also has a website for improved access) and has access to patient records such as their NHS account. This removed the need for manual data entry as much as possible. 

This would work in a similar way to the current service so the data could be implemented as whats in the existing system.

I am also going to set a limit on the scope of the project, I'm not going to be testing this to a level which is required of that of a medical device and I'm going to be building a very simple prototype which would output the data to a development console. This would allow the project to be tested without sharing incorrect data to the NHS system.

## Environment

I decided to prototype this as a simple python application. This would allow for a photo to be added and then the program ran. 

When the program was ran it would then open up each layer of the image processing.

## Development
### Scanning the QR Code

Each lateral flow test has a QR code on the top of it. This allows for the identifier to be quickly entered into the website. The IDs are in the format of 3 letters followed by 8 numbers.

Knowing this, I can create the function `readQR(image)` which will take an image, and scan the QR Code (using the pyzbar library).

Once the QR code has been scanned the position of the 4 corners are revealed. This is used to draw a border around the QR code and place the value as a label.

The position data is then used to create an X and Y scale. These are created by measuring the distance between the top points and the left points.

And then, I come into my first problem. The QR code within image must be at exactly 90 deg. So what I did is throw my demo image into Photoshop and transform it manually.

But now we can see the QR code and read the data.

![Lateral flow test labeled with ID number at the top, positive label over QR code, QR is within a bounding box. Y axis and X axis is labelled for the scale](/images/lft-scanning/qr-example.webp)

*NB: I have added in the label for the X and Y scales and the positive label was a placeholder ready to be filled with the data in the next stage*

### Reading the result (first attempt)

My technique for reading the result was to crop into the image to find a the test window and look at the positions of the control and test lines and use that to read a result of true or false. 

The way the test would be read would so that the control line would be read first and that would catch the tests that have not worked, if a control line exists then look to see if there is a test line. if there's a test line, its positive otherwise, its a negative result.

```py
if (control_line):
    if (test_line):
        return 'positive'
    else:
        return 'negative'

else:
    return 'invalid'
```