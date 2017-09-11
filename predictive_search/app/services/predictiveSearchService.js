'use strict';

PredictiveSearchService.$inject = ['$http', '$sce'];

function PredictiveSearchService($http, $sce) {
    var name = 'Manjuanand';
    return {
        getWikiSearchResults: function (input) {
            var config = {
                params: {
                    format: "json",
                    action: "query",
                    prop: "extracts",
                    exchars: "140",
                    exlimit: "5",
                    exintro: "",
                    explaintext: "",
                    rawcontinue: "",
                    generator: "search",
                    gsrlimit: "10"
                }
            };
            var url = "https://en.wikipedia.org/w/api.php?";
            var trustedUrl = $sce.trustAsResourceUrl(url);
            config.params.gsrsearch = input;
            return $http.jsonp(trustedUrl, config).then(function (result) {
                return result;
            });
        }
    }
}

export default PredictiveSearchService;