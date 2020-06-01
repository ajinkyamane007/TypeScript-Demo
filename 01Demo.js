//Concept : Functions in TS

//Example : 1
// function Print(p1:number,p2:string):void  //(function dont return Anything so ' : void ' )
// {
//    console.log(p1 + p2);
// }
// //Print("AJ",121);
// Print(121,"AJ");
//Example : 2
// function Print(p1:any,p2:any):any
// {
//    console.log(p1 + p2);
// }
// Print("AJ",121);
// Print(121,"AJ");
//Example : 3 (Array) 
//ES-5
// let arr=["Raj","Kiran","Amit","Mahesh"];
// arr.forEach(Display);
// function Display(name:string):void
// {
//    console.log(name);
// }
//ES-6 Short hand operator
// let arr=["Raj","Kiran","Amit","Mahesh"];
// arr.forEach((name)=>{console.log(name);});

// var arr = ["Raj", "Kiran", "Amit", "Mahesh"];
// arr.forEach( (name) => console.log(name));
//**OR**
var arr = ["Raj", "Kiran", "Amit", "Mahesh"];
arr.forEach(function (name) { return console.log(name); });
