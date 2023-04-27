var fs   = require('fs');
var path = require('path');

const pageObjectFolder = '../../pageobjects/';

module.exports = function (page) {
    page = page + '.js';
    var pageObject = {};

    fs.readdirSync(pageObjectFolder).forEach(file => {
        if (file === page) {
            var pageOjectFile = path.join(pageObjectFolder,page);
            pageObject = require(pageOjectFile);
        }
    });
    return pageObject;
};
