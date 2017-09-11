(function () {
    var app = angular.module('myApp');

    function UsersService($resource) {
        return $resource('/api/users/:name');
    }
    app.factory('usersService', ['$resource', UsersService]);
})();