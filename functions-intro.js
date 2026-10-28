//functions mathy definition - input -> calculation -> output
//SDEV characteristic/definition 1 - function can be a group of statements that can be called repeatedly throught a program
//functions are the verb of the programming world - it performs action(s) or calculations whereas variables hold data


//function to repeat code
//we use the function (like the def keyword in python) keyword to define a function in js followed by () then {}
//this is defining a function but not using it

function say_hello(){
    console.log("HELLO")
}

//to run a function we have to call its name followed by the ()
say_hello()
say_hello()

//SDEV characteristic 2 is the way we often most use functions
//functions are blueprints for statements that take in outside data and perform action on that data/values/variables

//parameters are similar to placeholders...they define the number of inputs/data that you need a function to take in
//they do not determine what the data actually is...placeholder for future values
//parameters are used inside the function body (the code in between the {}) to tell the code what action you want to perform on the data
//the name do not matter, order does
//syntax is function function_name(parameter,parameter)
//we separate parameters by , to say how many pieces of data we want (aka how many variables we need for this function)
function add_number(num1,num2){
    let sum = num1 + num2
    console.log(sum)
}

//when run the function, they can be raw values, they can be variables and their names do not have to match the parameter names
let val1 = 7
let val2 = 8

add_number(val1,val2)
add_number(8,10)


//SDEV characteristic 3 - we can return resulting data into other functions or variables
//so far we have used void functions - functions without a return statement...they just
//return functions return data into another function or variable..very useful

//take the add_number example above and make it a return function
function add_number_return(num1,num2){
    let sum = num1 + num2
    //we use the return keyword plus the variable we want to return
    //we we learn about objects and arrays..we can also return those
    return sum

    //also return can be used without data to exit a function or prematurely exit
}

let answer = add_number_return(5,3)
console.log(answer)

//js is a functions as first class citizen language aka higher order function
//fancy way to say we can chain functions together
//your dont always have to return function results into variables
//return into other functions
console.log(add_number_return(5,9))