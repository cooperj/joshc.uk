---
title: Automatic scanning of Lateral Flow Tests
description: "I spent one weekend building a system to automatically scan asymptomatic covid tests."
publishDate: 2021-10-24
draft: false
icon: /images/lft-scanning/icon.webp
---

So it all started from me seeing this tweet.

[![Tweet from Will, two pictures, first picture 2 positive lateral flow covid tests, second picture Phil Mitchell (from eastenders) looking pensive](/images/lft-scanning/willne-tweet.webp)](https://twitter.com/willne/status/1414232187491266560)

I had a brainwave, and thought to myself; "Why can't we just take a picture of the tests to record it?"

Currently in the UK as of October 2021, there is two types of tests that the public can access the first being a **Lateral flow test**, and a **PCR test**.

If you do not have symptoms, you can complete a lateral flow test. These are known as <abbr title="Displaying no symptoms">asymptomatic</abbr> tests. 

These types of tests, can be completed anywhere and the result can be received within 30 minutes from taking the test. 

It is very popular to do these tests at home, with my University closing their on campus testing centre recently.

After a test has been taken, the results should be recorded on the [NHS Test & Trace website](https://gov.uk/report-covid19-result) (or via calling 119). This allows the government to do important stuff, such as analysing the distribution of the virus.

In England alone, it was reported by the National Audit Office that, in the period of 1st March to 30th May 2021, only 14% *(96 million)* of distributed lateral flow tests *(691 million)* where reported back to NHS Test & Trace.

They estimate that 655 million tests would have been used, so that leaves a massive **559 million unreported tests**. [National Audit Office (2021) p.g.7](#references)

The number of tests not being reported is described as "deeply disappointing" by Meg Hillier to The Guardian, as "[the] budget remains unspent despite the continued use of costly consultants and high levels of unused capacity in the system" [Syal, R. (2021)](#references)

My hypothesis is that either either people are either not reporting their tests is because it is difficult to do so or that they are not using the tests provided.

For this exercise I'm gonna follow the National Audit Office's estimation of majority of testing being used and not reported.

## My Aims

I aim to create a system that makes it much easier to record a test result by taking a picture.

In practise this would be built into an existing service such as the [NHS App](https://www.nhs.uk/apps-library/nhs-app/). The app could be the targeted platform as it's typically delivered as a native mobile application (but also has a website for improved access) and has access to patient records such as their NHS account. This will help to remove the need for manual data entry as much as possible. 

This would work in a similar way to the current service so the data could be implemented as whats in the existing system.

I am also going to set a limit on the scope of the project, I'm not going to be testing this to a level which is required of that of a medical device and I'm going to be building a very simple prototype which would output the data to a development console. This would allow the project to be tested without sharing incorrect data to the NHS system.

## Proof of Concept

I decided to prototype this as a simple python application that can just simply run on my computer.

I have used the Image library, the OpenCV Python API, TensorFlow, and Lobe (a tool to create the models).

### Scanning the QR Code

Each lateral flow test has a QR code on the top of it. This allows for the identifier to be quickly entered into the website. The IDs are in the format of 3 letters followed by 8 numbers.

Knowing this, I can create the function `readQR(image)` which will take an image, and scan the QR Code (using the pyzbar library).

Once the QR code has been scanned the position of the 4 corners are revealed. This is used to draw a border around the QR code and place the value as a label.

The position data is then used to create an X and Y scale. These are created by measuring the distance between the top points and the left points.


*And then, I come into my first problem*. The QR code within image must be at exactly 90 deg. So what I did is throw my demo image into Photoshop and transform it manually.

![Lateral flow test labelled with ID number at the top, positive label over QR code, QR is within a bounding box. Y axis and X axis is labelled for the scale](/images/lft-scanning/qr-example.webp)

*NB: I have added in the label for the X and Y scales and the positive label was a placeholder ready to be filled with the data in the next stage*

### Reading the result with Blob Detection (First Attempt)

My technique for reading the result was to crop into the image to find a the test window and look at the positions of the control and test lines and use that to read a result of true or false. 

The way the test would be read would so that the control line would be read first and that would catch the tests that have not worked, if a control line exists then look to see if there is a test line. if there's a test line, its positive otherwise, its a negative result.


This would be coded something like this:
```py
if (control_line):
    if (test_line):
        return 'positive'
    else:
        return 'negative'

else:
    return 'invalid'
```

So what I did was create a system to use the x and y positions of the QR code to orientate where the test windows is. I then added some post processing to highlight the test lines, and then ran blob detection.

I then *tried* to count the blobs, however, it was detecting shadows as false positives. This indicated to me that this was not a reliable method of determining the result.

![Lateral flow test with 2 cropped previews running filtering](/images/lft-scanning/scan-using-positions.webp)

It is important to mention when testing with different images, the exact position is never the same. These factors essentially forced me into choosing another method of reading the result.


### Reading the result with AI (Second Attempt)

I decided to change how I was planning to categorise the results. I used the [Lobe](https://www.lobe.ai/) software package to train a dataset using a wide collection of images that I have either captured myself or downloaded from the internet.

![Interface showing multiple images of test windows categorised with their result](/images/lft-scanning/lobe-training.webp)

What this software does, is allow for the simple creation of models by taking an existing model and changing it ever so slightly to create a custom model. 

This is useful because it can help save costs of creating the dataset from scratch.

So the major problem I have with using a generic model is that it doesn't know what to look for. You then have to train it with images that you have to customise the model. That requires good data.

So searched for lateral flow tests online and took pictures of my own tests, to start creating the model.

I took the data set, and split it in to two groups, training and testing.

![Positive test being displayed as a negative test](/images/lft-scanning/false-positive.webp)

After training the model, I tested the model, and it got it wrong. So I fixed the classification and kept testing, it started to work most of the time. I'm calling that successful.

So I exported the model for TensorFlow ready for the Python project.

![Exporting as TensorFlow dialogue](/images/lft-scanning/export-tf.webp)

I then swapped to using the TensorFlow model.

![Positive test correctly determined](/images/lft-scanning/working-demo.webp)

And, boom perfect! It is working.

And then, I tried with different sized images and unseen results. It then failed.

## Conclusion

So what have we learned?

## References

- [National Audit Office (2021), Test and trace in England - progress update (p.g. 7)](https://www.nao.org.uk/wp-content/uploads/2021/06/Test-and-trace-in-England-progress-update.pdf)

- [Syal, R. (2021), Almost 600m NHS home Covid tests unaccounted for, auditors reveal (The Guardian)](https://www.theguardian.com/society/2021/jun/25/almost-600m-nhs-home-covid-tests-unaccounted-for-auditors-reveal)