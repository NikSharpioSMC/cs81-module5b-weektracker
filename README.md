# cs81-module5b-weektracker

Santa Monica College: Module 5 Assignment 5B: My Week in Data


## Learning Objectives

* Understand how `.map()`, `.filter()`, and `.reduce()` operate and when to use them
* Practice passing functions as values and writing your own higher-order functions
* Use JavaScript to explore patterns in your own real-world weekly activities
* Strengthen your debugging, prediction, and reflection skills through hands-on discovery

## Example Output

```
Analyzing My Weekly Activities...

Total hours spent outdoors: 6.5
Average enjoyment for activities after 8 PM: 7.8
Most common activity type: creative
Low-effort, high-enjoyment activities: Drawing, Cooking

Reflection:
Even though I thought I'd enjoy social events most, solo activities were consistently higher-rated. 
Writing a reusable reduce function helped me isolate patterns I didn’t expect.
  
```

## Tutorial: Key Concepts

### What is a Higher-Order Function?

A function that takes another function as input, or returns a function as output.

### Common Higher-Order Tools

```
// map – transform each element
[1, 2, 3].map(n => n * 2); // [2, 4, 6]

// filter – keep matching elements
[1, 2, 3, 4].filter(n => n % 2 === 0); // [2, 4]

// reduce – combine into one value
[1, 2, 3].reduce((sum, n) => sum + n, 0); // 6
  
```

## Instructions

### 1. Create Your Weekly Data

In a file called `activityTracker.js`, define an array called `myWeek` containing 7 objects—one per day.

Each object must have:

* `day` (string)
* `activity` (string)
* `category` (e.g., physical, creative, social)
* `hoursSpent` (number)
* `enjoyment` (1–10)
* `timeOfDay` (morning, afternoon, evening)

### 2. Make Predictions

Write comment answers in your JS file:

* Which activity will have the highest enjoyment?
* What category will dominate your week?
* What patterns might exist around time of day?

### 3. Write Analysis Functions

Write at least 2 functions using `.map()`, `.filter()`, `.reduce()`, or chained combinations. Sample ideas:

* Total hours spent outdoors or on physical activity
* Average enjoyment by time of day
* Most common category
* Activities with low hours but high enjoyment

### 4. Create a Custom Higher-Order Function

Write a function that accepts another function as input. For example:

```
function filterByCondition(testFn) {
  return myWeek.filter(testFn);
}
filterByCondition(act => act.hoursSpent < 1 && act.enjoyment > 8);
  
```

## REFLECTION.md

In a file named `REFLECTION.md`, answer the following:

* Were your predictions accurate?
* What surprised you about your week?
* Which higher order function was most useful and why?

## Submission Instructions

1. Create a GitHub repo named cs81-module5b-weektracker.
2. Include your `activityTracker.js` and `REFLECTION.md`.
3. Make at least 3 meaningful commits showing progress.
4. Submit your GitHub URL to Canvas.
5. Upload a copy of `activityTracker.js` directly to Canvas.
