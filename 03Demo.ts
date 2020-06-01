let arr1=["Raj","Kiran","Amit","Mahesh"];
arr1.forEach( (name) => { console.log(name) } );

//**OR**

let arr2=["Raj","Kiran","Amit","Mahesh"];  // # It is only for "single parameter function" 
arr2.forEach( name => console.log(name) );

let arr3=["Raj","Kiran","Amit","Mahesh"]; 
// # For "more than one parameter function ( ) is required "
// arr3.forEach( (name,id) => { console.log( "Index[" +id+ "] : " +name )} ); 
arr3.forEach( (name,id) => {console.log( `Index[${id}] :  ${name}`)} );  //Strng literal form 


// If we dont want to cal functionn again and again then 
// Instead of giving name to function 
// we can use short hand sytax for functon writing

