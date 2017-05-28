/**
 * The empDetails class is base class which showing employee properties.
 * @class empDetails
 * @constructor
**/

class empDetails{

    private empID:number;
    private empName:String;

    constructor(emp_ID:number,emp_Name:String){

        this.empID = emp_ID;
        this.empName = emp_Name;

    }

    display(){
        return `Employee ID is :- ${this.empID} | Employee Name is :- ${this.empName}`;
    }
}

var emp = new empDetails(101,'Priyanka');
console.log(emp.display());