var chai        = require('chai');
var chaiWrapper = require('../util/common/pageWrapper');
    
chai.use(chaiWrapper);

var expect      = chai.expect;

module.exports = {
    elements: {
        ios: {
            'txtEmail'                  : '//TODO',
            'txtPassword'               : '//TODO',
            'btnSignIn'                 : '//TODO',
        },
        android: {
            'txtEmail'                  : '//TODO',
            'txtPassword'               : '//TODO',
            'btnSignIn'                 : '//TODO',
        }
    },
    commands: {
        isDisplayed : function() {
            expect('@login.btnSignIn').to.be.present;
        }
    },
};
