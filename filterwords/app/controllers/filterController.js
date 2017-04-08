'use strict';

FilterController.$inject = ['$scope', 'FilterService'];

function FilterController(scope, filterService) {
    var abusiveWords;
    scope.hideError = false;
    scope.inputWord = '';
    scope.disableSubmit = true;

    abusiveWords = filterService.getAbusiveWords();
    scope.checkWordsForAbuses = function () {
        if (scope.inputWord !== '') {
            scope.disableSubmit = scope.hideError =
                abusiveWords.indexOf(scope.inputWord) !== -1 ? true : false;
        } else
            scope.disableSubmit = true;
    }
}

export default FilterController;