// ==UserScript==
// @name          Harvest Stopwatch
// @namespace     https://github.com/chasingmaxwell
// @version       2.0.0
// @description   Log to the console every time you stop a timer in Harvest.
// @author        Peter Sieg <chasingmaxwell@gmail.com>
// @match         https://*.harvestapp.com/*
// @grant         none
// @updateURL   https://github.com/chasingmaxwell/harvest-stopwatch/raw/master/harvest-stopwatch.user.js
// @downloadURL https://github.com/chasingmaxwell/harvest-stopwatch/raw/master/harvest-stopwatch.user.js
// ==/UserScript==

(() => {
  /**
   * An event handler which logs a timer stop event to the console.
   *
   * @param {Event} event
   *   The Event object passed to the handler.
   */
  function logStop(event) {
    // Only act on .js-stop-timer.
    if (!event.target.matches('.js-stop-timer')) {
      return;
    }

    // Get time.
    const now = new Date();
    const hours24 = now.getHours();
    const hours = (24 - hours24) - (now.getTimezoneOffset() / 60);

    // Get task details.
    const infoElement = event.target
      .closest('.day-view-entry')
      .querySelector('.entry-info');
    const details = infoElement.textContent
      .replace(/\n\r/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();

    // Log the message.
    console.log(`Timer stopped at ${hours}:${now.getMinutes()}${hours24 < 12 ? 'am' : 'pm'}\nTimer details: ${details}`);
  }

  // Register the handler.
  document.addEventListener('click', logStop);
})();
