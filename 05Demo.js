//Concept : Inheritance in TS   (extends & super())
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Example : 1  
var Person = /** @class */ (function () {
    // Default parameters value assigned EX.{:="Mumbai "}
    // constructor
    function Person(no, name, address) {
        if (name === void 0) { name = "Rahul"; }
        if (address === void 0) { address = "Mumbai"; }
        this.no = no;
        this.name = name;
        this.address = address;
    }
    //Method
    Person.prototype.GetDetails = function () {
        return "Your no is " + this.no + " Name is " + this.name + " Address is " + this.address;
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(deptName, salary, no, name, address) {
        if (name === void 0) { name = "Rahul"; }
        if (address === void 0) { address = "Mumbai"; }
        var _this = _super.call(this, no, name, address) || this;
        _this.deptName = deptName;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.Print = function () {
        console.log("welcome sir " + this.name + " to " + this.deptName);
    };
    return Employee;
}(Person));
var emp1 = new Employee("IT", 45000, 10, "Rohit", "Sangli");
emp1.Print();
