---
title: Getting started
description: "Empower your NuxtJS application with @nuxt/content module: write in a content/ directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a Git-based Headless CMS."
publishDate: 2007-06-07
---

Empower your NuxtJS application with `@nuxtjs/content` module: write in a `content/` directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a **Git-based Headless CMS**.

## Writing content

Learn how to write your `content/`, supporting Markdown, YAML, CSV and JSON: https://content.nuxtjs.org/writing.

## Fetching content

Learn how to fetch your content with `$content`: https://content.nuxtjs.org/fetching.

## Displaying content

Learn how to display your Markdown content with the `<nuxt-content>` component directly in your template: https://content.nuxtjs.org/displaying.

```
imposter among us
```

```py
def guess_my_number():

    # Init vars
    guess_count = 0
    guessed = False

    # Welcome Explainer
    print("GUESS MY NUMBER \nA Project by Joshua Cooper \n\nThe computer will try to guess your number... \nPlease enter a range of numbers which includes your number. \nIf you choose the number 49, enter 1-100.")

    # User input of ranges
    input_valid_range = False
    while input_valid_range == False:
        try:
            number_range = input("\nEnter the range (e.g. 1-100): ").split("-")
            bound_lower = int(number_range[0])
            bound_upper = int(number_range[1])

            # Check if the range is valid
            if (bound_lower > bound_upper):
                print(
                    "You have entered an incorrect range. Your lower bound is greater than your upper bound.")

            # count of possible numbers is less then one
            elif (bound_upper - bound_lower) <= 1:
                print(
                    f"You have entered too small of a range. ({bound_upper - bound_lower} possible)")

            # Passed checks
            else:
                input_valid_range = True

        # Catch bad input, i.e. can't be split, or if there is no upper or lower bounds
        except:
            print("You have entered an incorrect range. Most likely it was a formatting issue, ranges must be entered exactly '1-100' and do not support negative numbers.")

    # If the range is valid, output a message stating the range to user.
    print(
        f"\nThe lowest the number can be is {bound_lower}, \nand the highest number can be {bound_upper - 1}.")

    # Guessing Loop, keep running until answer is guessed
    while guessed == False:
        # Calc range of answers that could be the target
        bound_length = bound_upper - bound_lower

        # Guess the middle number in the range
        guess = int((bound_length / 2) + bound_lower)

        # Call helper function, take returned values as updates
        guess_count, guessed, higher = submit_guess(guess, guess_count)

        # if the goal is higher than the guess, get rid of the lower bound
        if higher:
            bound_lower = guess

        # if the goal is lower, get rid of the high numbers
        else:
            bound_upper = guess

        pass

    # Runs only when the number has been guessed
    print(f"Your number was guessed after {guess_count} attempts...")

```
