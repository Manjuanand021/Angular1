'use strict';

FilterController.$inject = ['$scope', 'FilterService'];

function FilterController(scope, filterService) {
    var abusiveWords = [
        "Hell",
        "Screw",
        "Bloody",
        "Shit",
        "Damn"
    ];
    scope.hideError = false;
    scope.name = filterService.getName();
    scope.inputWord = '';
    scope.checkWordsForAbuses = function () {
        if (abusiveWords.indexOf(scope.inputWord) !== -1)
            scope.hideError = true;
        else
            scope.hideError = false;
    }
}

export default FilterController;