//this is comment
//variables store data.  In javascript variables use the let keyword or var keyword to declare them
//JS is not type safe/strongly typed - do not declare data types before we use a variable
//let is the newer version of var that is scoped

//let is function or block scoped - this variable is only scoped to teh function or block it belongs to

//var was the old way to declare variables - globally scoped
//dont use var almost ever

//we will mainly use number types, strings, and objects are javascript

//in your book, javascript statments end with a ;
//this is optional
let a = 8
let b = 10;
let z = a + b

//to display things something on screen or the terminal we use the console.log method/function
console.log(z)

//javascript also utilizes constants as a keyword and a type.  A constant can be declared but not changed after the loading of a page
const number = 100
console.log(number)

//modulo - % takes two numbers, divides them, and the result is the remainder of that calculation
// 4 % 2 = 0 because no remainder when 4 / 2 ..this is useful in things like clock/calendar math or working with different base systems
let modanswer = 4 % 3
console.log(modanswer)

//increments and decrements - you can take a current value and shorthand it to add something to it
// z = z + 5
z += 5
console.log(z)

//string in js is surrounded by "" or '' .  Strings are usually just text
//you can combine strings but no other operations can be done to them as far as math operators are concerned
//combine strings is called concatonation
let first_name = "Zach"
let last_name = "Hamby"
let full_name = first_name + " " + last_name
console.log(full_name)

//sometimes we need to calculate data (perform math) we have to convert or parse data
//js like python, takes data in as strings when users input it usually
//also like python we can chain functions (actions) together
//parse strings (convert) to other types
//parsDatatype function will do this...parseInt,parseFloat
//we also have another built in function that allows us to create a pop up window to grab data...prompt
//similar to the input() function in python
//int are whole numbers...floats are decimals
let val1 = parseInt(prompt("Please give me your first number"))
let val2 = parseInt(prompt("Please give me your second number"))
let result = val1 + val2
console.log(result)