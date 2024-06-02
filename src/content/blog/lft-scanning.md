---
title: Automatic scanning of Lateral Flow Tests
description: "I spent one weekend building a system to automatically scan asymptomatic covid tests."
pubDate: 2021-12-30
draft: false
icon: /images/lft-scanning/icon.webp
---

So it all started with me seeing this tweet.

[![Tweet from Will, two pictures, first picture 2 positive lateral flow covid tests, second picture Phil Mitchell (from EastEnders) looking pensive](/images/lft-scanning/willne-tweet.webp)](https://twitter.com/willne/status/1414232187491266560)

I had a brainwave, and thought to myself; "Why can't we just take a picture of the tests to record it?"

Currently in the UK as of December 2021, there are two types of tests that the public can access the first being a **Lateral flow test**, and a **PCR test**.

If you do not have symptoms, you can complete a lateral flow test. These are known as <abbr title="Displaying no symptoms">asymptomatic</abbr> tests. 

These types of tests can be completed anywhere and the result can be received within 15 to 30 minutes from taking the test. 

It is very popular to do these tests at home, with my University closing their on-campus testing centre recently.

After a test has been taken, the results should be recorded on the [NHS Test & Trace website](https://gov.uk/report-covid19-result) (or via calling 119). This allows the government to do important stuff, such as analysing the distribution of the virus.

In England alone, it was reported by the National Audit Office that, in the period of 1st March to 30th May 2021, only 14% *(96 million)* of distributed lateral flow tests *(691 million)* were reported back to NHS Test & Trace.

They estimate that 655 million tests would have been used, so that leaves a massive **559 million unreported tests**. [National Audit Office (2021) p.g.7](#references)

The number of tests not being reported is described as "deeply disappointing" by Meg Hillier to The Guardian, as "[the] budget remains unspent despite the continued use of costly consultants and high levels of unused capacity in the system" [Syal, R. (2021)](#references)

I hypothesise that either people are either not reporting their tests is because it is difficult to do so or that they are not using the tests provided.

For this exercise, I'm gonna follow the National Audit Office's estimation of the majority of testing being used and not reported.

## My Aims

I aim to create a system that makes it much easier to record a test result by taking a picture.

In practice, this would be built into an existing service such as the [NHS App](https://www.nhs.uk/apps-library/nhs-app/). The app could be the targeted platform as it's typically delivered as a native mobile application (but also has a website for improved access) and has access to patient records via their NHS account. 

This will help to remove the need for manual data entry as much as possible. 

This would provide the NHS and UKHSA with the exact same data it collects from the existing system.

I am also going to set a limit on the scope of the project, I'm not going to be testing this to a level that is required of that of a medical device and I'm going to be building a very simple prototype that would output the data to a developer console. This would allow the project to be tested without sharing incorrect data with the NHS system.

## Proof of Concept

I decided to prototype this as a simple python application that can just simply run on my computer.

I have used the Image library, the OpenCV Python API, TensorFlow, and Lobe (a tool to create the models).

### Scanning the QR Code

Each lateral flow test has a QR code on top of it. This allows for the identifier to be quickly entered into the website. The IDs are in the format of 3 letters followed by 8 numbers.

Knowing this, I can create the function `readQR(image)` which will take an image, and scan the QR Code (using the pyzbar library).

Once the QR code has been scanned the position of the 4 corners are revealed. This is used to draw a border around the QR code and place the value as a label.

The position data is then used to create an X and Y scale. These are created by measuring the distance between the top points and the left points.

![Lateral flow test labelled with ID number at the top, positive label over QR code, QR is within a bounding box. Y-axis and X-axis is labelled for the scale](/images/lft-scanning/QR-example.webp)

*NB: I have added in the label for the X and Y scales and the positive label was a placeholder ready to be filled with the data in the next stage*

### Reading the result with Blob Detection (First Attempt)

My technique for reading the result was to crop into the image to find the test window and look at the positions of the control and test lines and use that to read a result of true or false. 

The way the test would be read would be so that the control line would be read first and that would catch the tests that have not worked, if a control line exists then look to see if there is a test line. if there's a test line, it is positive otherwise, it is a negative result.


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

So what I did was create a system to use the x and y positions of the QR code to orientate where the test windows are. I then added some post-processing to highlight the test lines and then ran blob detection.

*And then, I come into my first problem*. The QR code within the image must be at exactly 90 deg. So what I did is throw my demo image into Photoshop and transform it manually.

![Lateral flow test with 2 cropped previews running filtering](/images/lft-scanning/scan-using-positions.webp)

I then *tried* to count the blobs, however, it was detecting shadows as false positives. This indicated to me that this was not a reliable method of determining the result.

It is important to mention when testing with different images, the exact position is never the same. 

These factors forced me into choosing another method of reading the result.

### Reading the result with AI (Second Attempt)

I decided to change how I was planning to categorise the results. I used the [Lobe](https://www.lobe.ai/) software package to train a dataset using a wide collection of images that I have either captured myself or downloaded from the internet. 

*This was chosen based on the presentation by [Bennett, J. (2020)](#references)*

![Interface showing multiple images of test windows categorised with their result](/images/lft-scanning/lobe-training.webp)

What this software does, is allow for the simple creation of models by taking an existing model and changing it ever so slightly to create a custom model. 

This is useful because it can help save costs of creating the dataset from scratch.

So the major problem I have with using a generic model is that it doesn't know what to look for. You then have to train it with images that you have to customise the model. That requires good data.

So searched for lateral flow tests online and took pictures of my tests, to start creating the model.

I took the data set and split it into two groups, training and testing.

![Positive test being displayed as a negative test](/images/lft-scanning/false-positive.webp)

After training the model, I tested the model, and it got it wrong. So I fixed the classification and kept testing, it started to work most of the time. I'm calling that successful.

So I exported the model for TensorFlow ready for the Python project.

![Exporting as TensorFlow dialogue](/images/lft-scanning/export-tf.webp)

I then swapped to using the TensorFlow model.

![Positive test correctly determined](/images/lft-scanning/working-demo.webp)

And, boom perfect! It is working.

And then, I tried with different sized images and unseen results. It then failed.

## So what have we learned?

After spending the time to scan this type of COVID test and have concluded that the ability to scan tests is both difficult and hard.

For most purposes: self-reporting the test is good enough, and the user should be placed into a position of trust to accurately report the test, as all the safeguards could be bypassed simply by getting someone else to do the test for you to allow you to submit a manipulated result.

However, that is not the end of this story, as over the internet stories of Bluetooth connected tests have arisen, these provide the desired outcome with a significant decrease in complexity.

These work by having 2 optical sensors at the point of the indicators to see if they have been filled, and then report that back via software. This removes all the bottlenecks of the heavy processing requirements of scanning and positioning a test cartridge in a picture.

I would have to recommend reading [this thread by Foone](https://twitter.com/Foone/status/1475228059867381761?s=20), where they tear down one of these tests.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">for example, consider that a bit more than 1 in 12 people have some kind of colorblindness.<br>Having a computer say &quot;POSITIVE&quot; or &quot;NEGATIVE&quot; is going to be easier to see then the uncertainty of &quot;is that stripe red? can I just not see it?&quot;</p>&mdash; foone (@Foone) <a href="https://twitter.com/Foone/status/1475255973677649921?ref_src=twsrc%5Etfw">December 27, 2021</a></blockquote>

What these types of tests do is allow folk to access to the necessary testing; regardless of whether they have vision problems (such as blindness or colour blindness) without needing someone else.

This allows someone to be significantly more independent, and personally, that is nothing but the right thing.

## References

- [National Audit Office (2021), Test and trace in England - progress update (p.g. 7)](https://www.nao.org.uk/wp-content/uploads/2021/06/Test-and-trace-in-England-progress-update.pdf)

- [Syal, R. (2021), Almost 600m NHS home Covid tests unaccounted for, auditors reveal (The Guardian)](https://www.theguardian.com/society/2021/jun/25/almost-600m-nhs-home-covid-tests-unaccounted-for-auditors-reveal)

- [Bennett, J. (2020), It's the most Cloudful time of the year *(presentation given to the School of Computer Science, University of Lincoln)*](https://youtu.be/6hTUNE1oqYY)