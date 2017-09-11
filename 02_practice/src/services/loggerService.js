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

export default EmployeeLogger;