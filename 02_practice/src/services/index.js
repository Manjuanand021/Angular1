import angular from 'angular';
import SuperHeroes from './superHeroes';
import EmployeeLogger from './loggerService';
import appConstants from './constantsService';
import QSerrivce from './qService';

angular.module('myApp').factory('superHeroes', [SuperHeroes]);
angular.module('myApp').service('employeeLogger', [EmployeeLogger]);
angular.module('myApp').constant('appConstants', [appConstants]);
angular.module('myApp').factory('employeeDataService', ['$q', '$timeout', QSerrivce]);