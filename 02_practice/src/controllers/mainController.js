export default function mainController($q, superHeroes, employeeLogger, appConstants, employeeDataService) {
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