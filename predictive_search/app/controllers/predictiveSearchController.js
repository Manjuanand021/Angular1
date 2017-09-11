'use strict';

PredictiveSearchController.$inject = ['$scope', 'PredictiveSearchService'];

function PredictiveSearchController(scope, predictiveSearchService) {
    scope.searchResults = [];
    scope.hideError = false;
    scope.inputWord = '';
    scope.processing = false;
    scope.getWikiSearchResults = function () {
        scope.searchResults = [];
        scope.processing = true;
        if (scope.inputWord !== '') {
            predictiveSearchService.getWikiSearchResults(scope.inputWord).then((data) => {
                var response = data.data.query.pages;
                for (var page in response) {
                    scope.searchResults.push(response[page].title);
                }
                console.log(scope.searchResults);
                scope.processing = false;
            });
        }
    }
    scope.some = () => {
        console.log(scope.inputWord);
    }
}

export default PredictiveSearchController;