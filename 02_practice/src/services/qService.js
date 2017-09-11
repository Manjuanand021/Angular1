export default function QSerrivce($q, $timeout) {
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