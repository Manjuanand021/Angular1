(function () {
    var app = angular.module('myApp', []);

    function Parent() {
        return {
            restrict: 'E',
            templateUrl: '/partials/directives/parent.html',
            transclude: true,
            controller: function ($scope) {
                $scope.msg = 'Demostrating ng-transclude';
            }
        }
    }

    function DatePicker() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs, controller) {
                element.datepicker();
            }
        }
    }

    function Child() {
        return {
            restrict: 'E',
            templateUrl: '/partials/directives/child.html',
            scope: true
        }
    }

    function Focus() {
        return {
            link: function (scope, element, attrs, controller) {
                element.focus();
            }
        }
    }

    function RepeatX() {
        return {
            // link: function (scope, element, attrs, controller) {
            //     for (var i = 0; i < Number(attrs.repeatX) - 1; i++) {
            //         element.after($compile(element.clone().attr('repeat-x', 0))(scope));
            //     }
            // }
            compile: function (element, attrs) {
                for (var i = 0; i < Number(attrs.repeatX) - 1; i++) {
                    element.after(element.clone().attr('repeat-x', 0));
                }
                return function (scope, element, attrs, controller) {
                    attrs.$observe('text', function (newValue, oldValue) {
                        if (newValue === 'Manjuanand') {
                            element.css('color', 'blue');
                        }
                    });
                }
            }
        }
    }

    app.directive('parent', [Parent]);
    app.directive('child', [Child]);
    app.directive('repeatX', [RepeatX]);
    app.directive('datePicker', [DatePicker]);
    app.directive('initialFocus', [Focus]);
    //     directive('uiFoo',
    //     function () {
    //         return {
    //             restrict: 'E',
    //             link: function ($scope, element, attrs) {
    //                 $scope.message = function () {
    //                     alert(1);
    //                 };
    //             },
    //             controller: function ($scope) {
    //                 var names = ['Manjuanand'];
    //                 this.addName = function (name) {
    //                     names.push(name);
    //                 }
    //                 this.getNames = function () {
    //                     return names;
    //                 }
    //             }
    //         };
    //     }
    // ).directive('uiBar',
    //     function () {
    //         return {
    //             restrict: 'A',
    //             require: '^uiFoo',
    //             scope: true,
    //             link: function ($scope, element, attrs, uiBarController) {
    //                 uiBarController.addName('Toladinni');
    //                 console.log('Names in bar - ', uiBarController.getNames());
    //             }
    //         };
    //     }).directive('uiHotel',
    //     function () {
    //         return {
    //             restrict: 'A',
    //             require: '^uiFoo',
    //             scope: true,
    //             link: function ($scope, element, attrs, uiHotelController) {
    //                 uiHotelController.addName('lolesha');
    //                 console.log('Names in hotel - ', uiHotelController.getNames());
    //             }
    //         };
    //     }
    // );
})();