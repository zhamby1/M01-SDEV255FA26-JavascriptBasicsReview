//functions as expressions
//a function can be declared like a variable or math calculation in the newer versions of js
// an expression y = x + 7

//create a function like its a variable..in this first case this is syntax sugar

// function add_numbers(num1,num2){
//  console.log(num1 + num2)
// }

//the above function would be equivalent to the following function as an expression

let add_numbers = function(num1,num2){
    console.log(num1 + num2)
}

add_numbers(5,7)

//arrow functions can simplify functions for us
//we can create an expression that then can be tied to a function using arrow notation (=>)
//lets us simplify function defining and allow a better function chaining process
//syntax let variable_name = parameters => function body
// => mean DO THIS TO THE PARAMETERS

//by default arrow functions are return functions

let find_sum = (num1,num2) => num1 + num2
let answer = find_sum(10,3)
console.log(answer)