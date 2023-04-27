var {Then} = require('@cucumber/cucumber');

const actions   = require('../../util/action/actions.js');

Then(/^I expect element "([^"]*)?" is displayed$/, (element) => {
    actions.waitForVisible(element, false);
  });
