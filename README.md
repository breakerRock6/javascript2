# Popup Button (JS Event Listener Practice)

A tiny project I made while learning how `addEventListener` works in JavaScript. It's just one HTML file with one button, but it helped me understand how the browser reacts to things the user does.

## What it does

There's a single button that says **show**. 

- Click it and you get an alert saying **"vanakkam"**
- Hover your mouse over it and you get a different alert saying **"hiiiii"**

That's all. No frameworks, no libraries, no setup.

## How to run it

1. Download or clone this repo
2. Open `popup.html` in any browser (just double-click it)
3. Click the button, then try hovering over it

## What I learned

- How to grab an element using `document.getElementById`
- How to attach more than one event to the same element (`click` and `mouseover`)
- That `addEventListener` takes the event name first and a function second

## Heads up

The hover alert fires every time your mouse touches the button, so it can get a bit annoying. That's normal. I left it in on purpose so I could see the difference between `click` and `mouseover` clearly.

## Files

```
popup.html   # the button and the script, all in one place
README.md    # you're reading it
```

## Things I want to try next

- Replace the `alert()` with something nicer, like showing text on the page
- Try other events like `mouseout`, `dblclick`, and `keydown`
- Move the JavaScript into its own `.js` file
- Add some CSS so the button doesn't look so plain

---

Still learning, so if you spot something I could do better, feel free to open an issue or tell me.
