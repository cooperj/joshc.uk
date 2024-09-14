---
title: My tips for successfully using Unity with Git
description: "Tips to make your experience with Unity and Git pleasant!"
pubDate: 2022-09-28
draft: false
icon: /images/unity-git-tips.webp
tags:
  - unity
---

<div id="comment-box">

<span aria-hidden="true">🚸</span> This blog post is my own views, and not the views of [Unity](https://unity.com/), [GitHub](https://github.com), or [GitLab](https://gitlab.com).

</div>

I am a fan of Git, it kind of just works. It is the version control system I have the most experience with; and with tools such as [GitHub](https://github.com) and [GitLab](https://gitlab.com), you can easily use it to create an off-site copy of your code.

However, when using it with Unity with a team project (like [Aquanaut](/portfolio/aquanaut)), you need to take extra care in planning.

This blog post is to share my experience.

# Should I use GitHub or GitLab

This is a nuanced question, you need to figure out a couple of things first.

0. Where do you want your data to be hosted?

Are you okay with your code being stored on someone else's, server? If not you can look into self-hosted options such as [GitLab](https://docs.gitlab.com/ee/install/) or [Gitea](https://gitea.io/) which can be installed for free. Or, you can get an On-Premise server from [GitHub Enterprise](https://github.com/enterprise).

1. How much money do you have for the project?

You need to look at the free plans, see what works for your current needs, and what will allow you to grow. A difference between GitLab and GitHub, is that GitLab offers 5 GB of storage compared to 1 GB. You may find this useful for larger game projects. However, self-hosting will allow you to control storage space more.

2. Where do your teammates use Git?

Another consideration is where do your current teammates use git? They may use tools such as [GitHub Desktop](https://desktop.github.com/) - That will only allow them to use only use GitHub or an enterprise server.

There is also a learning curve of each different interface, this should also be accounted for.

# Command-line, terminal or GUI?

GUIs are great for providing extra information or providing quick support. However, using a terminal allows for quicker use of regular used actions, known as the:

- `git add .` [^1]
- `git commit -m <message>` [^2]
- `git push (origin main)` [^3]

[^1]: Using the `.` instead of explicitly selecting files can create [merge conflicts](#merge-conflicts) if you are not careful!

[^2]: You can run this command without the `-m <message>` option, but this will cause a text editor such as `nano` or `vim` to open. However, using the `-m` option is what I find to be the easiest way to explain.

[^3]: The origin main are optional values (hence being shown in brackets), you can run the command without it, however you may want it to be more explicit. Origin is the reference to your remote, and main is your current branch. These are the most common options. Remember to not leave it in the brackets.

But, it can be hard to understand what is going on, so it might be worth using both a GUI and a terminal.

I recommend using a GUI to learn the basics, but to use the terminal to understand what is going on - you shouldn't be scared about the terminal. Being scared **will** make it harder to understand and use.

It is important to note that, [Git maintains a list of available GUIs you may want to use for a variety of platforms](https://git-scm.com/downloads/guis).

As an extra tip, you may find it useful to use something like "[oh my zsh](https://ohmyz.sh/)" or "[oh my bash](https://ohmybash.nntoan.com/)" to provide extra labelling in your terminal and to [allow for commands to be typed much shorter](https://kapeli.com/cheat_sheets/Oh-My-Zsh_Git.docset/Contents/Resources/Documents/index).

# Merge Conflicts

A scary thing you can encounter is merge conflicts. This is when a single file has been edited by more than one person.

For my group project, this was a big problem for us. We had to then change how we worked to avoid this.

It is important to have **only one person work on files stored as a blob (or blob-like) file, such as a scene or a prefab**.

How we did it was to have an agreement to not use `git add .`, this would add _all the files_ to the commit, _especially the current scene that has been worked on_, as moving the camera would change the scene file.

Therefore, you should only add the files you have changed. You can use the command: `git add Scripts/PlayerMovement.cs`, with the path being the file you have changed. You can also create a list out a bunch of file paths at once!

Not only that, but you can use a [GUI](#command-line-terminal-or-gui) to help you stage and unstage changes. But, you can also use the command `git status` to see which changes have been made.

And, once you're ready to go back to another branch or pull in other people's changes, remember to drop the changes. I like to do that by running:

- `git checkout -- .` [_(from Stack Overflow)_](https://stackoverflow.com/a/49343276)

## I'm here because I have a merge conflict!

Oh, no! <span aria-hidden="true">😭</span>

I've been there, it is not fun.

You need to find the most up to date, and most functional version of your scene, this might be your QA branch, or you may have to look at previous commits.

Then get a copy of the corrupted file at that stable version, and then use it to replace the changes made in the problematic branch. You want to ensure you accept the changes - and not try to merge the two.

You should then test it works and then push these changes into your branch if it does. If it doesn't work, try again with an older version.

Any changes that we have just overwritten will be lost, so it's important that you **create small and often commits.**
