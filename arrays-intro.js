//array are like lists in python.  They are collections of data.  They are stored as individual items called elements.  
//you grab data out of an array by calling its index
//they are great for organizing data

//declare an empty array
let scores = []

//add data individually using index
// index is the same as position
// syntax is arrayname[index] = value
//all array start at 0
scores[0] = 90
scores[1] = 95
scores[2] = 80
scores[3] = 60

//grab data call the array index of the value you want...lets say i want the 95 score
console.log(scores[1])

//arrays can be any type or object or even other arrays
//strings
let names = ["Zach","Tim","Aly"]
console.log(names[0])

//you can dynamically add items to an array
//you can add data without specifiying its index and it will stick the value at the end of the array
//push function does this (similar to append in python)
scores.push(75)

//debug arrays to see what is in them..this is not the same as iterating over it and should be used in the console to check what is inside
console.log(scores)

//remove the last added item with pop
names.pop()
console.log(names)