//compound conditions - and, or, not
//this allows us to combine multiple evaluations in one statement
//this along with else-if statements allow us to avoid certain if statement nesting requirements
// and (&&) - both statements must be true for the evaluation to result in a true
// or (||) - only one of the conditions must be true for the whole evaluation to result in true
// not (!) - takes the boolean result of a condition, and flips it to the opposite (true becomes false....false becomes true)

//voting program with us citizen 
//both must be true to vote
//we will use the and operator

let age = 19
let us_citizen = "y"
if(age >= 18 && us_citizen == "y"){
    console.log("You can vote")

}
else{
    console.log("You CANNOT vote")
}

//Lets use an or example
//I am at the movies and you have to be a senior citizen or a child to get a movie discount
//we will use or to see if age <= 12 or age >= 65
let movie_age = 10

if(movie_age <= 12 || movie_age >= 65){
    console.log("You get a discount")
}

else{
    console.log("You do not get a discount")
}

//most other not operators that is not != use built in JS functions
//they are very useful for defense programming
//isNAN - is not a number to see if something is a number or not
//that will return a true or false depending on the data type given
let value = 10
let isnumber = isNaN(value)
console.log(isnumber)


//ternary operators - shorthand for an if else statement with two known responses
//if we want to see if a score passes a test we could say that the score has to be >= 60
//if a score is >= 60 then display passed if not displayed failed
//ternary syntax - condition ? true statement : false statment
let score = 70
console.log(score >= 60 ? "passing" : "failing")