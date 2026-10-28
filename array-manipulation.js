let scores = [95,100,75,90,85]

//one of the most common things we do with arrays is display array data to a user
//console.log is just for debugging...the user will not see array data unless we unpack it
//to do this we use a loop or other functions built into js
//there are multiple way to loop through data
//in each case it is in the form of a type of for loop

//traditional way to iterate
//we can use the .length property function to grab the array size
for(i = 0; i < scores.length; i++){
    console.log(scores[i])
}

//for of way...for item in the array do something to it (similar to for in loop in python)
//JS this is similar to a for each loop in other languages, but js has a for each function we will see in a minute
//syntax is (for temporary_variable_name_representing_single_item of arrayname)
//the temp variable represents each individual item in the array
for(let score of scores){
    console.log(score)
}

//for each method/function built in JS array classes
//sytnax uses the wrrow
//using it this way allows us to do some cool built in function filtering/manipulation with js
//syntax is arrayname.forEach(single_varname) => what you want done
scores.forEach(score =>{
    console.log(score)
})


//find things in an array like a test score
//indexOf
//indexOf returns the index of a value if it is found  uses the first found value..return -1 if not found
found_95 = scores.indexOf(95)
console.log(found_95)

//if something exists and returns true or false
//include function
inclues_scores = scores.includes(110)
console.log(inclues_scores)

//filter - newish function that will filter out a array based on a set of conditions
socres_filter = scores.filter(score => score >= 90)
console.log(socres_filter)