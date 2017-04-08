//Other dependencies here
require('./style.scss');

//Data Logic - model
var dataController = (function () {
    var abusiveWords = [
        "Hell",
        "Screw",
        "Bloody",
        "Shit",
        "Damn"
    ];
    return {
        getAbusiveWords: function () {
            return abusiveWords;
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
        toggleDisplay: function (hide) {
            var errorTextElement = document.querySelector(domStrings.error_text);
            hide ? (errorTextElement.style.display = 'block') : (errorTextElement.style.display = 'none');
        },
        addEventToSubmitButton: function (callback) {
            document.querySelector(domStrings.submit_btn).addEventListener('click', callback);
        }

    }
})();

//Main controller - Contrller in MVC
var appController = (function (uiCtrl, dataCtrl) {

    function submitForm(event) {
        // var submitBtn = uiCtrl.getSubmitButton();
        console.log(event);
        event.preventDefault();

    }

    return {
        init: function () {
            console.log('App has started running...');
            uiCtrl.toggleDisplay(false);
            uiCtrl.addEventToSubmitButton(submitForm);
        }
    }
})(uiController, dataController);

appController.init();