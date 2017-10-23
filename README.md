# harvest-stopwatch

It happens all too frequently: You stop your timer, get up for a quick break, come back to work and forget to push that "Start" button. When did you come back to work? How much time should you add to your timer? You feverishly scour text and slack history to find some kind of timestamped message sent/received around the time you came back. Sometimes the best you can do is guess. Well, no more! harvest-stopwatch is a userscript which logs to the console every time you stop a timer in Harvest. If you can't remember when you stopped the timer on an open Harvest tab, simply open up your browser's console and there it will be!

## Installation:

Make sure you install a userscript engine like [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo), then follow this link:

[Install harvest-stopwatch](https://github.com/chasingmaxwell/harvest-stopwatch/raw/master/harvest-stopwatch.user.js)

## Usage:

When you can't remember the time you stopped a timer on an open Harvest tab, simply open up your browser's console. You will find a timestamped log entry corresponding with each time you stopped a timer on that tab.

## @TODO:

- Display stop log in a more user-friendly format than the console.
- Persist the log outside a single Harvest tab.
- Stop using jQuery.
