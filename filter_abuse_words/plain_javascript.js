//Other dependencies here
require('./style.scss');

//Data Logic - model
var dataController = (function () {
    var abusiveWords = [
        "hell",
        "screw",
        "bloody",
        "shit",
        "damn"
    ];
    return {
        checkAbusiveWords: function (input) {
            if (abusiveWords.includes(input.toLowerCase()))
                return true;
            else
                return false;
        }
    }
})();

//DOM Manipulation logic - view related
var uiController = (function () {
    var domStrings = {
        error_text: '#error-text',
        submit_btn: '.btn-submit'
    };
    return {
        toggleErrorDisplay: function (hide) {
            var errorTextElement = document.querySelector(domStrings.error_text);
            hide ? (errorTextElement.style.display = 'block') : (errorTextElement.style.display = 'none');
        },
        addEventHandlers: function (callback) {
            //Event listener for button
            document.querySelector(domStrings.submit_btn).addEventListener('click', callback);
            //Event listener for enter key
            document.addEventListener('keypress', function (event) {
                if (event.keyCode === 13) {
                    console.log('I am enter key');
                    callback(event);
                }
            })
        },
        getInputValue: function () {
            return document.querySelector('#txtWord').value;
        }
    }
})();

//Main controller - Contrller in MVC
var appController = (function (uiCtrl, dataCtrl) {
    function submitForm(event) {
        //check for abusive abusiveWords
        if (dataCtrl.checkAbusiveWords(uiCtrl.getInputValue())) {
            //Show error message
            uiCtrl.toggleErrorDisplay(true);
            //Prevent form submission
            event.preventDefault();
        } else {
            //Hide error message
            uiCtrl.toggleErrorDisplay(true);
            //Do the nedfull and remove form submit from html            
        }
    }
    return {
        init: function () {
            console.log('App has started running...');
            uiCtrl.toggleErrorDisplay(false);
            uiCtrl.addEventHandlers(submitForm);
        }
    }
})(uiController, dataController);

//Start the app
appController.init();