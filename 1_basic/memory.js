// how memory works in javascript
//there are two type of memory 
//1. stack (primitive) -- we got a cpoy of variables etc
//2. heap (non primitive) -- we got reference of original value

let myIndustryname = "ULTRON"
let anothername = myIndustryname
anothername = "Naruto"
console.log(anothername);
console.log(myIndustryname);


let UserOne={
    email: "prashant@gmail.com",
    upi: "user@ybl"
}

let UserTwo = UserOne
UserTwo.email= "ultron@gmail.com"

console.log(UserOne.email);
console.log(UserTwo.email);
