//Concept : Inheritance in TS   (extends & super())

//Example : 1  

class Person 
{
    // Dara members or field or variables 
    no:number;  
    name:String;
    address:string;
    // Default parameters value assigned EX.{:="Mumbai "}
    // constructor
    constructor(no:number,name:string="Rahul",address:string="Mumbai") 
    {
        this.no=no;
        this.name=name;
        this.address=address;
    }
    //Method
    GetDetails():string
    {
        return `Your no is ${this.no} Name is ${this.name} Address is ${this.address}`;
    }
}

class Employee extends Person
{
    deptName:string;
    salary:number;
    constructor(deptName:string, salary:number,no:number,name:string="Rahul",address:string="Mumbai")
    {
        super(no,name,address);
        this.deptName=deptName;
        this.salary=salary;
    }

    Print()
    {
        console.log(`welcome sir ${this.name} to ${this.deptName}`);
    }
}

let emp1=new Employee("IT",45000,10,"Rohit","Sangli");
emp1.Print();
