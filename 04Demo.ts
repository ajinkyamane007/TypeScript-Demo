//Concept : Class in TS

//Example : 1

// class Person 
// {
//     // Dara members or field or variables 
//     no:number;  
//     name:String;
//     address:string;
//     // Default parameters value assigned EX.{:="Mumbai "}
//     // constructor
//     constructor(no:number,name:string="Rahul",address:string="Mumbai") 
//     {
//         this.no=no;
//         this.name=name;
//         this.address=address;
//     }
//     //Method
//     GetDetails():string
//     {
//         return `Your no is ${this.no} Name is ${this.name} Address is ${this.address}`;
//     }
// }

class Person 
{
    // Default parameters value assigned EX.{:="Mumbai "}
    // constructor
    constructor(public no:number,public name:string="Rahul",public address:string="Mumbai") 
    {
        this.no=no;
        this.name=name;
        this.address=address;
    }
    // Method
    GetDetails():string
    {
        return `Your no is ${this.no} Name is ${this.name} Address is ${this.address}`;
    }
}

let p1=new Person(11,"Sumit","Pune");
///console.log(p1);
console.log(p1.GetDetails());

let p2=new Person(12,"Sumit");
console.log(p2.GetDetails());

let p3=new Person(13);
console.log(p3.GetDetails());

