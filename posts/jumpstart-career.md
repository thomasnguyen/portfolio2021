---
title: "Jumpstart your career"
tags: ["TECH", "career"]
dateCreated: 1609372800
dateModified: null
---

Some quick advice to any new engineers starting their new career.

## 1. Ask questions (put your pride away)

Engineers only know one thing, and it's that they don't know everything. Especially for _entry-level_ engineers, you're going to have a **lot** of questions and that's _ok_. Don't feel like your team is going to think less of your skills. It's better to ask questions than fail because you didn't know about the requirements.

Put your ego aside and ask questions early.

It's exponentially better to ask questions early so that you can plan project beforehand. It's okay to have questions down the line as you work towards the goal but try to have more of it before the project starts.

Your team will thank you for it. Seriously, they have much more patience in the beginning than the end.

With that being said however, be cognizance of bombarding your team members questions. Remember they have their own work too. My advice is to always do you research (aka stack-overflow) if you think you are asking too many questions.

## 2. Imposter Syndrome happens to everyone

Essentially Imposter Syndrome is the feeling of not belonging to the team or somehow being a fraud. This phenomenon happens to everyone in the engineering community, even 10+ year experienced devs.

The problem with imposter syndrome is that it takes a lot of your headspace and can cause worrying levels of stress / anxiety. Keeping untreated stress can cause dips in productivity.

From my experience, an actionable task to tackle this problem is

1. Focus on your strengths. There are legitimate reasons why your employer has chose you. Figure them out and embrace it. Write them down and share it with a friend

2. Find a mentor - someone that can help you when you get stuck. The most important thing a mentor can do is to tell you that it's ok to struggle (and that everyone goes through them)

3. Create a brag document. Truthfully you have accomplished a lot already in your career. Every win, make sure you have them documented somewhere. This psychology enforces positivity and self worth.

Luckily Imposter Syndrome, it has been heavily researched, and I recommend you read some more on it. I recommend starting on the wikipedia page.

## 3. Don't assume you are always right

When diving into a codebase, it can very tempting to refactor everything but realize many times developers have already thought it through and decided to do it that way.

Example:

You see this code

```javascript
let bool;
if (isDirty) {
  bool = isAbove0;
} else {
  bool = false;
}
```

and want to refactor it to this because you're thinking this is so much cleaner. Well is it really? Even if it is, is it worth the time? A senior engineer might not think so especially if coding standards have been established that way.

With that being said though, it doesn't hurt to have a conversation with your team about it _casually_;

```javascript
const bool = isDirty ? (isAbove0 ? true : false) : false;
```
