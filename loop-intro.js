//loops repeat code until a condition is met..they use the same operators as conditionals.
//we use for loops and while loops
//while loops - flags - creates a condition then repeats until the condition is met
//flag or sentinel values - the value the loop uses to exit

//js does have do while and while loops

//while loop
let answer = "n"
while(answer == "n"){
    answer = prompt("Are you going insane yet? Press y and enter to exit or n to continue the insanity")
}
console.log("You finally exited the loop")

//sometimes we want to test a condition at the end of a loop run instead of before
//this is a do while loops purpose - you do not need to use a do while loop...it can also be acheived a while loop if your prime input
//do while loops execute always at least 1 time

let answer2

do{
    answer2 = prompt("Do you want to continue the loop? Press y and enter to do so or n and enter to exit")
}
while(answer2 == "y")

//for loop - js goes with the traditional way of doing a for loop unlike python :)
// a for loop is count controlled and runs a certain number of times then exits
// for loops are great for iterating over data and will be the loop you use by far the most often
//syntax is for(i=value; condition; increment value)
//for instance i = 0 until it is less than or equal to 10 and increase by 1 during each repetition
//the ++ syntax means increase the value by 1 each time
for(i = 0; i <= 10; i++){
    console.log(i)
}

//break keyword - break in the middle of a loop if a condition is met
for(i = 0; i <= 5; i++){
    if(i == 3){
        break
    }
    console.log(i)
}

//continue - continue the loop after the break condition instead of stopping it
//basically skip the value you use with continue
for(i = 0; i <= 5; i++){
    if(i == 3){
        continue
    }
    console.log(i)
}
