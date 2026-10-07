// datatype summary
//JavaScript is a dynamically typed language

// there are two type of datatypes in javascript
// 1. primitive datatype
// 2. reference datatype        



//a. primitives are immutable, they are stored in stack memory
// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol    
//7. bigint

const score = 10;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

// const bigNumber = 23456789234n


//b. reference datatypes are mutable, they are stored in heap memory
// 1. array
const heros = ["prashant","tanishka","ayushi"];

// 2. object
let myObj={
  name:"prashant",
  age:22,
}
// 3. function
const myFunction = function(){
    console.log("hello world"); 
}

console.log(typeof bigNumber);