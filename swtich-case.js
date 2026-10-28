//switch case is very useful and similar to an else-if
//but instead we are looking for exact values or matches
//think of a multiple choice or dropdown menu

//given a certain value, which associate with a particular coin - penny(1), nickle(5), dime(10), quarter(25)

let pocket_change = 25
let coin

switch(pocket_change){
    case 1:
        coin = "penny"
        break
    case 5:
        coin = "nickle"
        break
    case 10:
        coin = "dime"
        break
    case 25:
        coin = "quarter"
        break
    
    //default is like our else
    default:
        coin = "uknown or not valid"

}

console.log(coin)