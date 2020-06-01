//Concept : Optional $ Default parameters is TypeScript
//Example : 1
function printDetails(id, name, address) {
    console.log(id + " " + name + " " + address);
}
printDetails(10, "Aj", "Pune");
//Example : 2
function printDetails1(id, name, address) {
    console.log(id + " " + name + " " + address);
}
printDetails1(10, "Aj");
//Example : 3
function printDetails2(id, name, address) {
    if (id === void 0) { id = 100; }
    if (name === void 0) { name = "Surya"; }
    if (address === void 0) { address = "Karad"; }
    console.log(id + " " + name + " " + address);
}
printDetails2(10, "Aj");
printDetails2(10);
printDetails2();
