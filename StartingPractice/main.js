//basic data types
/*
let name = "Aryan"; (String datatype)
let age = 21; (Number/int/float datatypes)
let isLoggedIn = false; (boolean datatype)
let Sym1 = new Symbol("symbol"); (Symbol datatype for unique usecases)
null indicates 0 value or empty value or it has a datatype of 'object' shown below
undefined means there is something or a value that is not defined, there is difference between null and undefined
*/

console.log(typeof null); // => returns object

// Type conversion
// Number conversion
let nameString = "Aryan";
let numString = "123";

// let newNum = Number(nameString); // NaN because character strings are not possible to convert in number
let newNum = Number(numString) // converts string "123" into numerical format 123
console.log(newNum);
console.log(typeof newNum); // Number

// Boolean conversion
console.log(Boolean(1)) // Number 1 is considered boolean True
console.log(Boolean(0)) // Number 0 is considered boolean False

let nonEmpty = Boolean("hello") // Non Empty Strings are converted as True
let Empty = Boolean("") // Empty Strings are converted as False

// String Conversion

let givenNumber = 24;
let convertedNumber = String(givenNumber); // now it is string "24"
let value = true;
let convertedvalue = String(value); // now value is a string "true"

// Math object

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);

// Objects
// Initialization

let person = new Object(); // constructor method also known as singleton
let user = {
    fullName : "Aryan Bhatt",
    age : 21,
    email : "abc@gmail.com",
    isLoggedIn : true,
}; // Object literals method

// Access methods

console.log(user.fullName); // dot notation
console.log(user["age"]); // box notation

// Changing values
console.log(user.email); // before change
user.email = "abc@hotmail.com";
console.log(user.email); // after change

// Functions can also be added in objects

user.welcome = function(){
    console.log("Welcome user");
}

console.log(user); // after addition of function

// this keyword - used to reference the current context. Also it refers to the context where a piece of code, such as a function's body, is supposed to run
// Suppose there is a function that prints the message with the name defined in respective object

user.welcomeName = function(){
    console.log(`Welcome, ${this.fullName}`);
}

console.log(user.welcomeName()); // prints message with fullName

/* Some IMP methods in object */
console.log(Object.keys(user)); // returns an array of all the keys of an object
console.log(Object.values(user)); // returns an array of all the values of an object
console.log(Object.entries(user)); // returns an array of all the key-value pairs of an object that are also set in array form
// Object.freeze(); => locks the object and does not allow modification to the property and values of an object
// object concatenation/joining

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const obj3 = Object.assign({}, obj1, obj2);
//   (target , source(s))      
// obj3 will have the key-value pairs of obj1 and obj2. Note: The empty {} indicates that the result will be stored in the target empty object 

const obj3 = {...obj1, ...obj2}; // using spread operator

// Object Destructuring 

const details = {
    userName : "AryanBhatt",
    designation : "Intern",
    department : "React",
    durationInMonths : 3,
}

const {userName} = details; 
console.log(userName); // gives the name in the details object

const {userName : Name} = details; // we can also store it in a variable
console.log(Name); // // gives the name in the details object

// Arrays 

// Intialization
const myArr = [0, 1, 2, 3, 4, 5]; // box notation
const myArr2 = new Array(1, 2, 3, 4); // constructor method

console.log(myArr[2]); // Access method only by index number

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // converts into a comma seperated array of string of the respective elements

// console.log(myArr);
// console.log(newArr);

// slice, splice methods

console.log("Before slice ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("After slice ", myArr);


console.log("Before splice ", myArr);
const myn2 = myArr.splice(1, 3)
console.log("After splice ", myArr);
console.log(myn2);

// Array concatenation

const Boys = ["Nayan", "Himesh", "Sagar", "Priyanshu", "Shekhar"];
const Girls = ["Himani", "Priya", "Rashmi", "Sumukhi", "Diya"];

// const Everyone = Boys.concat(Girls); // Returns an array that has the mixture of both the arrays. Note: we cannot use push method as it takes the 2nd array as one element and adds it as an array
const Everyone = [...Boys, ...Girls]; // spread operator method
console.log(Everyone);

const nestedArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const simplifiedArray = another_array.flat(Infinity) // breaks down the nesting of array and arranges them in a single array
console.log(simplifiedArray);

// Array of objects imp for JSON
const userArray = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "i@gmail.com"
    },
    {
        id: 3,
        email: "j@gmail.com"
    },
]

userArray[1].email // accessing

// date object 

let dateObj = new Date();
console.log(dateObj.toString()); // returns the today's date with time and time zone
console.log(dateObj.toLocaleString()); // returns the today's date with time but not time zone
console.log(dateObj.toDateString()); // returns the today's full date
console.log(dateObj.getDate()); // returns the today's date 

let timeStamp = Date.now(); // gives the timestamp in milliseconds from the date 1 January 1970, we need to further process it to use in applications

// loops

// while
let i = 0;
while (i < 5){
    console.log("value of i: " ,i);
    i++;
} // basic most loop

// for 

for (let j = 10; j >= 0; j--){
    console.log("value of j: " ,j);
} // most used loop 

// for...of loop
// print only those names which starts with 'S'
for(let boy of Boys){
    if(boy[0] == 'S' || boy[0] == 's'){
        console.log(boy);
    }
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);