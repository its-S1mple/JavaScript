// checking if a number is greater than other number

let num1 = 3
let num2 = 8 

if(num1 > num2){
    console.log("num1 is greater than num2");
    
}
else{
    console.log("num2 is greater than num1");
}

//checking if two strings are same

let fName = "manish"
let lName = "manisha"

if (fName == lName) {
    console.log("Username taken, pls use other name");
    
} else {
    console.log(`successfully created a new account with name ${fName}`);
    
}

// checking if a variable is a number or not;

let score = "90"
console.log(typeof score);

if (typeof(score) === 'number' ) {
    console.log(`you scored ${score}`);
    
} else {
    console.log("invalid data type.(not a number)");
    
}
//checking if a boolean value is true or false

let isTeaReady = false

if(isTeaReady){
    console.log("the tea is ready.");
    
}
else{
    console.log("tea is NOT ready");
    
}

//checking if an array is empty or not 

let myfile = ["anshu"]

console.log(myfile.length);

if(myfile.length == 0){
    console.log("file is empty");
    
}
else{
    console.log("file is NOT empty");
    
}