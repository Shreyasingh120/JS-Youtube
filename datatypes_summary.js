//At the basis of how we store memory and access memory datatypes are diveded into two types
//1-Primitive datatypes-call by value means when we copy data it donot give original memory but gives its copy
//7 types-String,Number,Boolean,Undefined,null,symbol-it is used to make any value unique,bigInt


//Reference type or non-primitive dataype-directly we allocate the memory reference
//Arrays,Objects,Functions

//Javascript is a dynamically typed lauguage.This means that variables type are determined at the runtime,you donot need to explicitily declare the variable type befor using it.You can assign different types of value to the variable during its lifetime

//const id=Symbol('123');
//const anotherId('123');

//console.log(id===anotherId)



//******************************************************************************************************************************* */

// Stack(Primitive)   and    Heap(non-primitive)

let myChannnelname="Shyeya kumari";

let anothername= myChannnelname;

console.log(anothername);

//in stack the copy is given for changes not original

let userOne={
    email:"sk38@mail.com",
    name:"shreya"
}
let userTwo=userOne;

userTwo.email="muskan@google.com";

console.log(userOne.email);
console.log(userTwo.email);

//in heap it will get direct access to memory or direct reference to memory 