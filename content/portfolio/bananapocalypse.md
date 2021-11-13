---
title: Bananapocalypse
description: For my college, I created an Angry Birds style video game prototype within Unity to be played on a mobile phone.
icon: /images/ba/icon.webp
publishDate: 2019-05-15
draft: false
---
## What is the project?

As a part of my college course, I created a game in the Unity Engine, this was the first game I had ever made to a level of polish. This game was created to be similar to the popular mobile game, [Angry Birds](https://www.angrybirds.com/), but with a banana flavoured twist.

The project's brief was to create a game which can be used to promote the college, and therefore it was given some requirements which were set by the college;

- There must be a small number of levels and play, this is because the purpose is to be shown at the showcase, and the end-users aren’t going to be staying at for a long period.

- Skills need to be expressed, this is because of with the showcase its main purpose is to present the skills of the individual students and the department as a whole.

- The game needs to be appropriate for the *wide* target audience, so this means that there isn't any inappropriate content, such as extreme violence, this is because this may make the audience feel uncomfortable.

## The Design

I created the design for my game, this would consist of how the game and all the different objects will look like on the mobile phone, and this includes how the game played.

### The Objects/Characters

There are 4 objects that I created: (from left to right) the Banana, the Face Banana, the Super Banana, and the Bad Apple. 

The Super Banana and the Face Banana are both variants of the standard Banana. 

The Bad Apple is a complete opposite of the bananas, this removes points, whereas the Banana gives the user points.

The Super Banana is an enhanced variant of the standard Banana, this gives the user 10 times the number of points, compared to the standard Banana, which only gives a single point.

Similarly, the Face Banana is a modification of the standard Banana, however, it only gives the user a single point, it is purely a design change, this was requested by the client during negotiations which took place.

<div class="flex-row">

![item in the game, banana](/images/ba/banana1.webp)

![item in the game, face banana](/images/ba/banana2.webp)

![item in the game, super banana](/images/ba/banana3.webp)

![item in the game, bad apple](/images/ba/bad-apple.webp)

</div>

## The First Release

The game was originally designed to target a mobile phone. 

![game being played on an iphone](/images/ba/mobile-demo.webp)

After creating the game, myself and beta testers have discovered things that were less than pleasant after the game finished its development.

Firstly, I thought that the graphics do not look as good in the final version compared to the mockups. This was done so that the users' experience (UX) was improved, this did make an negative impact on the User Interface (UI).

Secondly, from the user feedback, they suggested that I should add a line, this would be projected to show the user where the banana will land, this would make the game easier to play.

The game also worked correctly as it was deployed to an iPhone for the demonstration and testing.

## The Second Release

Taking in the feedback and challenges from the first release, I recreated the game.

I reduced the requirements of the game being polished to allow for a better vertical slice to be created. This involved removing unnecessary menu systems and sound effects to save time.

The first change was to change the target platform, I changed this to be played on a computer, allowing for quicker development. This also allows the game to be played inside of a web browser.

Secondly, following user feedback I added a projection of where the banana would travel making the game much easier to play.

Finally, I improved the graphics by using softer shades of blue, added more detail to the trees, and added moving clouds.
### Demo

<iframe src="/demos/portfolio/bananapocalypse" frameborder="0" width="100%" height="900"></iframe>

The game plays by you *(the player)* shooting the other bananas and apples to knock them off the trees to score points. To shoot, use the <kbd>left mouse button</kbd>.

You can also hold <kbd>Ctrl</kbd> to increase your shooting power.

The trees and items are procedurally generated, and to reload the level, hit <kbd>Esc</kbd> and select the <kbd>Reset Level</kbd> option. This will respawn the trees.

If you are facing difficulties playing the game, you might find it useful to reload this page or to [view the prototype on itch.io](https://joshcooper.itch.io/bananapocalypse).