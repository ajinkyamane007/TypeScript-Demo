//Concept : Optional $ Default parameters is TypeScript

//Example : 1
function printDetails(id:number, name:string,address:string):void 
{
   console.log(id+" "+name+" "+address)  
}
printDetails(10,"Aj","Pune");

//Example : 2
function printDetails1(id:number, name:string,address?:string):void   // ? become address as "optional parameter"
{
   console.log(id+" "+name+" "+address)  
}
printDetails1(10,"Aj");

//Example : 3
function printDetails2(id:number=100, name:string="Surya",address:string="Karad"):void // ="Kard" Default Parameter for Address
{
   console.log(id+" "+name+" "+address)  
}
printDetails2(10,"Aj");
printDetails2(10);
printDetails2();





