//conditionals use the same structures in JS as they do in other langauges
//you have if (single alternative), else(dual alternative), else if (multi alternative), switch cases
//comparison operators are the same as other langauges (>,<,>=,<=,==,!=)
//js has one exception when it comes to the ==
//in most other languages == is used to compare two values to see if they are equal and uses a = to assign value
//in js, we can compare values regardless of type...this is the 
//for example 5 == "5"
//strictly compare - data type and the value must be equal
// === .... 5 === 5 would be true but 5 === "5" would be false

//create a program to see if someone is of the age to vote
let age = 17

//js does use () for comparisons
//js uses {} for blocks of code not indentation
if(age >= 18){
    console.log("You can vote")
}

//else dual alternative that provides a response if the if statement is false
else{
    console.log("You CANNOT vote")
}

//string with conditionals
//feed someone if they are hungry
let hungry = prompt("Are you hungry? ")

if(hungry == "y"){
    console.log("Here is some food")
}

else{
    console.log("I WILL NOT FEED YOU!")
}

//multi alternative. You can have more than one path or conditions for an evaluation...switch case is also an example and we will talk about it later

//create a program that converts numerical grades into letter grades (90 and above - A, 80-89 - B, etc...)

let score = 82
//unlike python, you can create an empty variable to then be assigned value later
let letter_grade

if(score >= 90){
    letter_grade = "A"
}

//short circuit evaluation - in an else if or switch case..as soon as a condition is met it skips the rest of them
else if(score >= 80){
    letter_grade = "B"
}

else if(score >= 70){
    letter_grade = "C"
}

else if(score >= 60){
    letter_grade = "D"
}

else{
    letter_grade = "F"
}

console.log(letter_grade)