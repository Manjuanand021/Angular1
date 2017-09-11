import angular from 'angular';
import homePageUrl from './templates/home.html';
import employeeDetailsPageUrl from './templates/employeeDetails.html';
import contactUsPageUrl from './templates/contactUs.html';

const app = angular.module('myApp', []);
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
            templateUrl: homePageUrl,
            controller: 'HomeController',
            controllerAs: 'homeCtrl'
        })
        .when('/employee/:emp', {
            templateUrl: employeeDetailsPageUrl,
            controller: 'EmployeesController',
            controllerAs: 'employeeCtrl'
        })
        .when('/contactUs', {
            templateUrl: contactUsPageUrl,
            controller: 'ContactUsController',
            controllerAs: 'contactCtrl'
        })
        .otherwise('/');
}]);

//imports
require('./services');
require('./controllers');