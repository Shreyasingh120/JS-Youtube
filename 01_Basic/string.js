const name="Shreya"

// const repoCount=3;

// console.log(name+repoCount); //this is the old method to write we will not use it

// console.log(`My name is ${name} and my repo conunt is ${repoCount}`);//this is the new method to write 

const myName= new String('Shreyakumari-hello-super');

// console.log(myName[0])//to find the position of letters

// console.log(myName.length); //to find length
// console.log(myName.__proto__);//to find the prototype
// console.log(myName.toLowerCase())//to change in lower case
// console.log(myName.charAt(2))//to see the position of characters
// console.log(myName.indexOf('e'));//to find the index of the letter

const newString=myName.substring(0, 5);//negative value cannot be given in it and it give the letter stating from 0 to 3
console.log(newString);

const anotherString=myName.slice(-10, 4);//negative value can be given to it and when we give negative value it starts from back but give value from front to 4 

console.log(anotherString);

const subName="     English        ";

console.log(subName.trim());//that remove the space there is also trim left and trim right 


const utl="http://www.shreya%dkumari.com";

console.log(utl.replace('%d','_'));//to replace anything

console.log(utl.includes('sunder'));//through it we can check anything that is in the sentence or not

console.log(myName.split("-"))//to split sentence and give an array 


