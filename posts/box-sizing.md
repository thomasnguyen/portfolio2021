---
title: "Box-sizing: Code Layouts Intuitively"
tags: ["TECH", "css"]
dateCreated: 1612029246
dateModified: null
---

![Box Model CSS](https://upload.wikimedia.org/wikipedia/commons/7/7a/Boxmodell-detail.png)

Padding messing up with your layout? It can be because of confusing browser default styling with box-sizing.

## What is boxing-sizing?

Box-sizing is a CSS property that tells the browser **how** the total width and height of an element is calculated. This factor comes into play often when setting the width/height to a percentage (most often 100%)

Box-sizing takes in 2 possible values, `content-box` and `border-box`

1. Content-box: Default browser behavior. Any padding or border values with be added to the initial width.
2. Border-box : calculates width but also account for borders and padding values

## Scenario

You might be thinking why this would ever be needed? Look to the example below with the following code.

![Step 1: Initial Layout](https://user-images.githubusercontent.com/14298038/103330613-25929a00-4a17-11eb-86e3-acfb82b6233a.png)

```html
<div class="parent">
  <div class="child">
    <a>Home</a>
    <a>Logout</a>
  </div>
</div>
```

The parent container has a total width of 500px. You want to add a menu child element with the width taking up the full container you have. Logically you set the child’s width to 100%. Makes sense and it works as below:

```css
.parent {
  background: gray;
  width: 500px;
}

.child {
  width: 100%;
}
```

Alright, that’s nice but your designer now wants you to add 10px padding on both sides left and right as seen below. Sounds simple, you now add this styling to your child class

```css
.child {
  width: 100%;

  padding-left: 10px;
  padding-right: 10px;
}
```

Oh no!, your page is now rendered as like this. What happened? Well the initial width is 500px but since you added the 20px worth of padding (left+right), the **total** width is now 520px.

![Step 2: Oh darn it messes up the layout](https://user-images.githubusercontent.com/14298038/103330529-bddc4f00-4a16-11eb-8e2b-0214880d43e0.png)

A possible solution to this is calculating the initial width with the `calc` function but unless you’re heavily using CSS variables, it just adds more overhead when we need to change those padding values.

Just slapping in the border-box property value fixes things and makes it more maintainable.

Ok:

```css
.child {
  width: calc(100% - 10px 10px);
}
```

Better:

```css
.child {
  width: 100%;
  box-sizing: border-box;
}
```

![Step 3: Yay we did it!](https://user-images.githubusercontent.com/14298038/103330658-5d014680-4a17-11eb-83e3-1ac7f0e27274.png)

As you can see, the browser is able to calculate the total width with the consideration from the padding. As said earlier in this post, it actually takes into account borders as well.

## BORDER-BOX EVERYTHING!

Border-box just makes so much more sense and it’s how we humans logically think when building layouts. There’s only a handful times I can even think of where I would use the default value `content-box`. Because of that, whenever I start a new project I add box-sizing to all the elements.

```css
/* apply a natural box layout model to all elements, but allowing components to change */
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
```

If I need to switch back to `content-box`, I simply just override the element with that styling. Simple and less headaches.

# Conclusion

Yep! That's all folks and if you want to see the final code check the codepen below.

Additional Resources:

1. [Codepen Working Example](https://codepen.io/toshiru/pen/VwKQZgN)
2. [box-sizing - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
