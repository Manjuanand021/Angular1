(function () {
    function UserService($http, md5, $log, $resource) {
        function fetchUsers(cb) {
            //$http returns a promise na dwe can use then in callback environmet to verify the putput
            return $http({
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/users'
            });
        }

        //$resource does not return promise but the result has promise        
        function fetchUsers_resource(cb) {
            return $resource('https://jsonplaceholder.typicode.com/users').query();
        }
        return {
            getUsers: fetchUsers,
            getUsers_resource: fetchUsers_resource
        }
    }
    angular.module('mainApp').factory('userService', ['$http', 'md5', '$log', '$resource', UserService]);
})();