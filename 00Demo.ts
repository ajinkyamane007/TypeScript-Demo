//Concept :   TS -> JS

// # TS is loosely coupled. 
// # JS is strictly typed.

// TypeScript is super set of JavaScript

let num1=100; 
//num1="abc";
console.log(num1);

let num2:number;   // here :number  define data type 
num2=120;
//num2="qwe";
console.log(num2);

let num:any;     // here :any  define ANY data type 
num=300;
num="abc";
console.log(num);



// Run tsc 00Demo.ts => To create  00Demo.js.JS file and to run .JS file use node 00Demo.js


// # TS wont have DOM elements acces - eg:window
//window is not js own obj .
//window object is given by Dom ultimately Browser to JS so the we can start manupulet elements 
window.alert("Hello sir : ");
