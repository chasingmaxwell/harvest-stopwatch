// ==UserScript==
// @name          Harvest Stopwatch
// @namespace     https://github.com/chasingmaxwell
// @version       1.0.0
// @description   Log to the console every time you stop a timer in Harvest.
// @author        Peter Sieg <chasingmaxwell@gmail.com>
// @match         https://*.harvestapp.com/*
// @grant         none
// @updateURL   https://raw.githubusercontent.com/chasingmaxwell/harvest-stopwatch/harvest-stopwatch.user.js
// @downloadURL https://raw.githubusercontent.com/chasingmaxwell/harvest-stopwatch/harvest-stopwatch.user.js
// ==/UserScript==

/* globals $ */

(() => {
  function logStop() {
    const now = new Date();
    const hours24 = now.getHours();
    const hours = (24 - hours24) - (now.getTimezoneOffset() / 60);
    const details = $(this)
      .closest('.day-view-entry')
      .find('.entry-info')
      .text()
      .replace(/\n\r/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
    console.log(`Timer stopped at ${hours}:${now.getMinutes()}${hours24 < 12 ? 'am' : 'pm'}\nTimer details: ${details}`);
  }

  $('.day-view-entry-list').on('click.logStop', '.js-stop-timer', logStop);
})();
