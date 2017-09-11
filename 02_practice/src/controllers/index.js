import angular from 'angular';
import mainController from './mainController';
import HomeController from './homeController';
import EmployeesController from './employeesController';
import ContactUsController from './contactUsController';

angular.module('myApp').controller('mainCtrl', ['$q',
    'superHeroes',
    'employeeLogger',
    'appConstants',
    'employeeDataService',
    mainController
]);
angular.module('myApp').controller('HomeController', []);
angular.module('myApp').controller('EmployeesController', []);
angular.module('myApp').controller('ContactUsController', []);