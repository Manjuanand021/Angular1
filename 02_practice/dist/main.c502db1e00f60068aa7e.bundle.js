webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__templates_home_html__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__templates_home_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__templates_home_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_employeeDetails_html__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_employeeDetails_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__templates_employeeDetails_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__templates_contactUs_html__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__templates_contactUs_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__templates_contactUs_html__);





const app = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module('myApp', []);
// app.provider('books', function (constants) {
//     this.$get = function () {
//         var appName = 'Service tutorial - ';
//         var appDesc = 'Angular Service explained in depth.';
//         if (this.isVersionInitialized) {
//             appName += 'V' + this.version;
//         }
//         return {
//             appName: appName,
//             appDesc: appDesc
//         }
//     }
//     this.isVersionInitialized = false;
//     this.setVersionForApp = function (version) {
//         this.isVersionInitialized = true;
//         this.version = version;
//     }
// })
//Function that configures angular module
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: __WEBPACK_IMPORTED_MODULE_1__templates_home_html___default.a,
            controller: 'HomeController',
            controllerAs: 'homeCtrl'
        })
        .when('/employee/:emp', {
            templateUrl: __WEBPACK_IMPORTED_MODULE_2__templates_employeeDetails_html___default.a,
            controller: 'EmployeesController',
            controllerAs: 'employeeCtrl'
        })
        .when('/contactUs', {
            templateUrl: __WEBPACK_IMPORTED_MODULE_3__templates_contactUs_html___default.a,
            controller: 'ContactUsController',
            controllerAs: 'contactCtrl'
        })
        .otherwise('/');
}]);

//imports
__webpack_require__(7);
__webpack_require__(12);

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

module.exports = "<h1>{{homeCtrl.msg}}</h1>"

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<h1>{{employeeCtrl.msg}}</h1>"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "<h1>{{contactCtrl.msg}}</h1>"

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__superHeroes__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loggerService__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constantsService__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__qService__ = __webpack_require__(11);






__WEBPACK_IMPORTED_MODULE_0_angular___default.a.module('myApp').factory('superHeroes', [__WEBPACK_IMPORTED_MODULE_1__superHeroes__["a" /* default */]]);
__WEBPACK_IMPORTED_MODULE_0_angular___default.a.module('myApp').service('employeeLogger', [__WEBPACK_IMPORTED_MODULE_2__loggerService__["a" /* default */]]);
__WEBPACK_IMPORTED_MODULE_0_angular___default.a.module('myApp').constant('appConstants', [__WEBPACK_IMPORTED_MODULE_3__constantsService__["a" /* default */]]);
__WEBPACK_IMPORTED_MODULE_0_angular___default.a.module('myApp').factory('employeeDataService', ['$q', '$timeout', __WEBPACK_IMPORTED_MODULE_4__qService__["a" /* default */]]);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SuperHeroes;
function SuperHeroes() {
    var sups = ['superman', 'batman', 'wonder-woman', 'aqua-man', 'flash', 'martian-manhunter']
    return {
        supHeroes: sups
    }
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function LoggerBase() {

}
LoggerBase.prototype.output = function (msg) {
    console.log(msg);
}

function EmployeeLogger() {
    LoggerBase.call(this);
    this.sayHello = function () {
        console.log('Hello Mr.Manjuanand Toladinni');
    }
}
EmployeeLogger.prototype = Object.create(LoggerBase.prototype);

/* harmony default export */ __webpack_exports__["a"] = (EmployeeLogger);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const appConstants = {
    APP_TITLE: 'Employee Service',
    APP_DESC: 'Application has all employee related data',
    APP_VERSION: '1.0'
}
/* harmony default export */ __webpack_exports__["a"] = (appConstants);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = QSerrivce;
function QSerrivce($q, $timeout) {
    return {
        getEmployeeDetails: function () {
            var employeeDefer = $q.defer();
            $timeout(function () {
                // employeeDefer.notify('Started processing request');
                // employeeDefer.notify('processing');
                // employeeDefer.notify('Request processing is completed');
                employeeDefer.resolve({
                    name: 'Manjuanand Toladinni',
                    age: 30,
                    role: 'TL'
                })
            }, 5000);
            return employeeDefer.promise;
        },
        getOtherEmployeeDetails: function () {
            var otherEmpDeferred = $q.defer();
            $timeout(function () {
                otherEmpDeferred.resolve({
                    name: 'Just Toladinni',
                    age: 30,
                    role: 'SSE'
                });
            }, 500);
            return otherEmpDeferred.promise;
        }
    }
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mainController__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homeController__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homeController___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__homeController__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__employeesController__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__employeesController___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__employeesController__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contactUsController__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contactUsController___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__contactUsController__);






__WEBPACK_IMPORTED_MODULE_0_angular___default.a.module('myApp').controller('mainCtrl', ['$q',
    'superHeroes',
    'employeeLogger',
    'appConstants',
    'employeeDataService',
    __WEBPACK_IMPORTED_MODULE_1__mainController__["a" /* default */]
]);
__WEBPACK_IMPORTED_MODULE_0_angular___default.a.module('myApp').controller('HomeController', []);
__WEBPACK_IMPORTED_MODULE_0_angular___default.a.module('myApp').controller('EmployeesController', []);
__WEBPACK_IMPORTED_MODULE_0_angular___default.a.module('myApp').controller('ContactUsController', []);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mainController;
function mainController($q, superHeroes, employeeLogger, appConstants, employeeDataService) {
    var vm = this;
    vm.sups = superHeroes.supHeroes;
    console.log(employeeLogger);
    employeeLogger.output('I am an example of how oen can create angular services using service api.');
    vm.appName = appConstants.APP_TITLE;
    vm.appDesc = appConstants.APP_DESC;
    var empPromise = employeeDataService.getEmployeeDetails();
    var otherEmpPromise = employeeDataService.getOtherEmployeeDetails();
    $q.all([empPromise, otherEmpPromise]).then(function (dataArr) {
        console.log(dataArr);
    });
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

function HomeController() {
    var vm = this;
    vm.msg = 'Home page';
}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function EmployeesController() {
    var vm = this;
    vm.msg = 'Employees page';
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

function ContactUsController() {
    var vm = this;
    vm.msg = 'Contact Us page';
}

/***/ })
],[1]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL2hvbWUuaHRtbCIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvZW1wbG95ZWVEZXRhaWxzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL2NvbnRhY3RVcy5odG1sIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3N1cGVySGVyb2VzLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2xvZ2dlclNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvY29uc3RhbnRzU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9xU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250cm9sbGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb250cm9sbGVycy9tYWluQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250cm9sbGVycy9ob21lQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250cm9sbGVycy9lbXBsb3llZXNDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2NvbnRyb2xsZXJzL2NvbnRhY3RVc0NvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSx3Qjs7Ozs7OztBQy9DQSx3QkFBd0IsY0FBYyxNOzs7Ozs7QUNBdEMsd0JBQXdCLGtCQUFrQixNOzs7Ozs7QUNBMUMsd0JBQXdCLGlCQUFpQixNOzs7Ozs7Ozs7Ozs7OztBQ0F6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtLOzs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDTEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUU7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUU7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRzs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEM7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoibWFpbi5jNTAyZGIxZTAwZjYwMDY4YWE3ZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcclxuaW1wb3J0IGhvbWVQYWdlVXJsIGZyb20gJy4vdGVtcGxhdGVzL2hvbWUuaHRtbCc7XHJcbmltcG9ydCBlbXBsb3llZURldGFpbHNQYWdlVXJsIGZyb20gJy4vdGVtcGxhdGVzL2VtcGxveWVlRGV0YWlscy5odG1sJztcclxuaW1wb3J0IGNvbnRhY3RVc1BhZ2VVcmwgZnJvbSAnLi90ZW1wbGF0ZXMvY29udGFjdFVzLmh0bWwnO1xyXG5cclxuY29uc3QgYXBwID0gYW5ndWxhci5tb2R1bGUoJ215QXBwJywgW10pO1xyXG4vLyBhcHAucHJvdmlkZXIoJ2Jvb2tzJywgZnVuY3Rpb24gKGNvbnN0YW50cykge1xyXG4vLyAgICAgdGhpcy4kZ2V0ID0gZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgIHZhciBhcHBOYW1lID0gJ1NlcnZpY2UgdHV0b3JpYWwgLSAnO1xyXG4vLyAgICAgICAgIHZhciBhcHBEZXNjID0gJ0FuZ3VsYXIgU2VydmljZSBleHBsYWluZWQgaW4gZGVwdGguJztcclxuLy8gICAgICAgICBpZiAodGhpcy5pc1ZlcnNpb25Jbml0aWFsaXplZCkge1xyXG4vLyAgICAgICAgICAgICBhcHBOYW1lICs9ICdWJyArIHRoaXMudmVyc2lvbjtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAgICAgYXBwTmFtZTogYXBwTmFtZSxcclxuLy8gICAgICAgICAgICAgYXBwRGVzYzogYXBwRGVzY1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIHRoaXMuaXNWZXJzaW9uSW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuLy8gICAgIHRoaXMuc2V0VmVyc2lvbkZvckFwcCA9IGZ1bmN0aW9uICh2ZXJzaW9uKSB7XHJcbi8vICAgICAgICAgdGhpcy5pc1ZlcnNpb25Jbml0aWFsaXplZCA9IHRydWU7XHJcbi8vICAgICAgICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcclxuLy8gICAgIH1cclxuLy8gfSlcclxuLy9GdW5jdGlvbiB0aGF0IGNvbmZpZ3VyZXMgYW5ndWxhciBtb2R1bGVcclxuYXBwLmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyKSB7XHJcbiAgICAkcm91dGVQcm92aWRlclxyXG4gICAgICAgIC53aGVuKCcvJywge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogaG9tZVBhZ2VVcmwsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIb21lQ29udHJvbGxlcicsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ2hvbWVDdHJsJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLndoZW4oJy9lbXBsb3llZS86ZW1wJywge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogZW1wbG95ZWVEZXRhaWxzUGFnZVVybCxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0VtcGxveWVlc0NvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyQXM6ICdlbXBsb3llZUN0cmwnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAud2hlbignL2NvbnRhY3RVcycsIHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6IGNvbnRhY3RVc1BhZ2VVcmwsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdDb250YWN0VXNDb250cm9sbGVyJyxcclxuICAgICAgICAgICAgY29udHJvbGxlckFzOiAnY29udGFjdEN0cmwnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAub3RoZXJ3aXNlKCcvJyk7XHJcbn1dKTtcclxuXHJcbi8vaW1wb3J0c1xyXG5yZXF1aXJlKCcuL3NlcnZpY2VzJyk7XHJcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPnt7aG9tZUN0cmwubXNnfX08L2gxPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi90ZW1wbGF0ZXMvaG9tZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDE+e3tlbXBsb3llZUN0cmwubXNnfX08L2gxPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi90ZW1wbGF0ZXMvZW1wbG95ZWVEZXRhaWxzLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT57e2NvbnRhY3RDdHJsLm1zZ319PC9oMT5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdGVtcGxhdGVzL2NvbnRhY3RVcy5odG1sXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xyXG5pbXBvcnQgU3VwZXJIZXJvZXMgZnJvbSAnLi9zdXBlckhlcm9lcyc7XHJcbmltcG9ydCBFbXBsb3llZUxvZ2dlciBmcm9tICcuL2xvZ2dlclNlcnZpY2UnO1xyXG5pbXBvcnQgYXBwQ29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzU2VydmljZSc7XHJcbmltcG9ydCBRU2Vycml2Y2UgZnJvbSAnLi9xU2VydmljZSc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnbXlBcHAnKS5mYWN0b3J5KCdzdXBlckhlcm9lcycsIFtTdXBlckhlcm9lc10pO1xyXG5hbmd1bGFyLm1vZHVsZSgnbXlBcHAnKS5zZXJ2aWNlKCdlbXBsb3llZUxvZ2dlcicsIFtFbXBsb3llZUxvZ2dlcl0pO1xyXG5hbmd1bGFyLm1vZHVsZSgnbXlBcHAnKS5jb25zdGFudCgnYXBwQ29uc3RhbnRzJywgW2FwcENvbnN0YW50c10pO1xyXG5hbmd1bGFyLm1vZHVsZSgnbXlBcHAnKS5mYWN0b3J5KCdlbXBsb3llZURhdGFTZXJ2aWNlJywgWyckcScsICckdGltZW91dCcsIFFTZXJyaXZjZV0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmljZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3VwZXJIZXJvZXMoKSB7XHJcbiAgICB2YXIgc3VwcyA9IFsnc3VwZXJtYW4nLCAnYmF0bWFuJywgJ3dvbmRlci13b21hbicsICdhcXVhLW1hbicsICdmbGFzaCcsICdtYXJ0aWFuLW1hbmh1bnRlciddXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1cEhlcm9lczogc3Vwc1xyXG4gICAgfVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy9zdXBlckhlcm9lcy5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBMb2dnZXJCYXNlKCkge1xyXG5cclxufVxyXG5Mb2dnZXJCYXNlLnByb3RvdHlwZS5vdXRwdXQgPSBmdW5jdGlvbiAobXNnKSB7XHJcbiAgICBjb25zb2xlLmxvZyhtc2cpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBFbXBsb3llZUxvZ2dlcigpIHtcclxuICAgIExvZ2dlckJhc2UuY2FsbCh0aGlzKTtcclxuICAgIHRoaXMuc2F5SGVsbG8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0hlbGxvIE1yLk1hbmp1YW5hbmQgVG9sYWRpbm5pJyk7XHJcbiAgICB9XHJcbn1cclxuRW1wbG95ZWVMb2dnZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMb2dnZXJCYXNlLnByb3RvdHlwZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbXBsb3llZUxvZ2dlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NlcnZpY2VzL2xvZ2dlclNlcnZpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgYXBwQ29uc3RhbnRzID0ge1xyXG4gICAgQVBQX1RJVExFOiAnRW1wbG95ZWUgU2VydmljZScsXHJcbiAgICBBUFBfREVTQzogJ0FwcGxpY2F0aW9uIGhhcyBhbGwgZW1wbG95ZWUgcmVsYXRlZCBkYXRhJyxcclxuICAgIEFQUF9WRVJTSU9OOiAnMS4wJ1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGFwcENvbnN0YW50cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NlcnZpY2VzL2NvbnN0YW50c1NlcnZpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFFTZXJyaXZjZSgkcSwgJHRpbWVvdXQpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0RW1wbG95ZWVEZXRhaWxzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBlbXBsb3llZURlZmVyID0gJHEuZGVmZXIoKTtcclxuICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gZW1wbG95ZWVEZWZlci5ub3RpZnkoJ1N0YXJ0ZWQgcHJvY2Vzc2luZyByZXF1ZXN0Jyk7XHJcbiAgICAgICAgICAgICAgICAvLyBlbXBsb3llZURlZmVyLm5vdGlmeSgncHJvY2Vzc2luZycpO1xyXG4gICAgICAgICAgICAgICAgLy8gZW1wbG95ZWVEZWZlci5ub3RpZnkoJ1JlcXVlc3QgcHJvY2Vzc2luZyBpcyBjb21wbGV0ZWQnKTtcclxuICAgICAgICAgICAgICAgIGVtcGxveWVlRGVmZXIucmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ01hbmp1YW5hbmQgVG9sYWRpbm5pJyxcclxuICAgICAgICAgICAgICAgICAgICBhZ2U6IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvbGU6ICdUTCdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sIDUwMDApO1xyXG4gICAgICAgICAgICByZXR1cm4gZW1wbG95ZWVEZWZlci5wcm9taXNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0T3RoZXJFbXBsb3llZURldGFpbHM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG90aGVyRW1wRGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG4gICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBvdGhlckVtcERlZmVycmVkLnJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdKdXN0IFRvbGFkaW5uaScsXHJcbiAgICAgICAgICAgICAgICAgICAgYWdlOiAzMCxcclxuICAgICAgICAgICAgICAgICAgICByb2xlOiAnU1NFJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgIHJldHVybiBvdGhlckVtcERlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2aWNlcy9xU2VydmljZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XHJcbmltcG9ydCBtYWluQ29udHJvbGxlciBmcm9tICcuL21haW5Db250cm9sbGVyJztcclxuaW1wb3J0IEhvbWVDb250cm9sbGVyIGZyb20gJy4vaG9tZUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgRW1wbG95ZWVzQ29udHJvbGxlciBmcm9tICcuL2VtcGxveWVlc0NvbnRyb2xsZXInO1xyXG5pbXBvcnQgQ29udGFjdFVzQ29udHJvbGxlciBmcm9tICcuL2NvbnRhY3RVc0NvbnRyb2xsZXInO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ215QXBwJykuY29udHJvbGxlcignbWFpbkN0cmwnLCBbJyRxJyxcclxuICAgICdzdXBlckhlcm9lcycsXHJcbiAgICAnZW1wbG95ZWVMb2dnZXInLFxyXG4gICAgJ2FwcENvbnN0YW50cycsXHJcbiAgICAnZW1wbG95ZWVEYXRhU2VydmljZScsXHJcbiAgICBtYWluQ29udHJvbGxlclxyXG5dKTtcclxuYW5ndWxhci5tb2R1bGUoJ215QXBwJykuY29udHJvbGxlcignSG9tZUNvbnRyb2xsZXInLCBbXSk7XHJcbmFuZ3VsYXIubW9kdWxlKCdteUFwcCcpLmNvbnRyb2xsZXIoJ0VtcGxveWVlc0NvbnRyb2xsZXInLCBbXSk7XHJcbmFuZ3VsYXIubW9kdWxlKCdteUFwcCcpLmNvbnRyb2xsZXIoJ0NvbnRhY3RVc0NvbnRyb2xsZXInLCBbXSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb250cm9sbGVycy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFpbkNvbnRyb2xsZXIoJHEsIHN1cGVySGVyb2VzLCBlbXBsb3llZUxvZ2dlciwgYXBwQ29uc3RhbnRzLCBlbXBsb3llZURhdGFTZXJ2aWNlKSB7XHJcbiAgICB2YXIgdm0gPSB0aGlzO1xyXG4gICAgdm0uc3VwcyA9IHN1cGVySGVyb2VzLnN1cEhlcm9lcztcclxuICAgIGNvbnNvbGUubG9nKGVtcGxveWVlTG9nZ2VyKTtcclxuICAgIGVtcGxveWVlTG9nZ2VyLm91dHB1dCgnSSBhbSBhbiBleGFtcGxlIG9mIGhvdyBvZW4gY2FuIGNyZWF0ZSBhbmd1bGFyIHNlcnZpY2VzIHVzaW5nIHNlcnZpY2UgYXBpLicpO1xyXG4gICAgdm0uYXBwTmFtZSA9IGFwcENvbnN0YW50cy5BUFBfVElUTEU7XHJcbiAgICB2bS5hcHBEZXNjID0gYXBwQ29uc3RhbnRzLkFQUF9ERVNDO1xyXG4gICAgdmFyIGVtcFByb21pc2UgPSBlbXBsb3llZURhdGFTZXJ2aWNlLmdldEVtcGxveWVlRGV0YWlscygpO1xyXG4gICAgdmFyIG90aGVyRW1wUHJvbWlzZSA9IGVtcGxveWVlRGF0YVNlcnZpY2UuZ2V0T3RoZXJFbXBsb3llZURldGFpbHMoKTtcclxuICAgICRxLmFsbChbZW1wUHJvbWlzZSwgb3RoZXJFbXBQcm9taXNlXSkudGhlbihmdW5jdGlvbiAoZGF0YUFycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGFBcnIpO1xyXG4gICAgfSk7XHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbnRyb2xsZXJzL21haW5Db250cm9sbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBIb21lQ29udHJvbGxlcigpIHtcclxuICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICB2bS5tc2cgPSAnSG9tZSBwYWdlJztcclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29udHJvbGxlcnMvaG9tZUNvbnRyb2xsZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIEVtcGxveWVlc0NvbnRyb2xsZXIoKSB7XHJcbiAgICB2YXIgdm0gPSB0aGlzO1xyXG4gICAgdm0ubXNnID0gJ0VtcGxveWVlcyBwYWdlJztcclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29udHJvbGxlcnMvZW1wbG95ZWVzQ29udHJvbGxlci5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gQ29udGFjdFVzQ29udHJvbGxlcigpIHtcclxuICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICB2bS5tc2cgPSAnQ29udGFjdCBVcyBwYWdlJztcclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29udHJvbGxlcnMvY29udGFjdFVzQ29udHJvbGxlci5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==