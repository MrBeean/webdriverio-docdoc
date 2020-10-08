const config = require("../../config/main-config");

module.exports = class Page {
  open(path) {
    if (path) {
      browser.url(config.baseUrl + path);
    } else {
      browser.url(config.baseUrl);
    }
  }

  waitAndClick(element) {
    element.waitForDisplayed({ timeout: config.elementTimeout });
    element.click();
  }
};
