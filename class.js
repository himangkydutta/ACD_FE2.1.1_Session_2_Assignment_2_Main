/**
 * The empDetails class is base class which showing employee properties.
 * @class empDetails
 * @constructor
**/
var empDetails = (function () {
    function empDetails(emp_ID, emp_Name) {
        this.empID = emp_ID;
        this.empName = emp_Name;
    }
    empDetails.prototype.display = function () {
        return "Employee ID is :- " + this.empID + " | Employee Name is :- " + this.empName;
    };
    return empDetails;
}());
var emp = new empDetails(101, 'Priyanka');
console.log(emp.display());
