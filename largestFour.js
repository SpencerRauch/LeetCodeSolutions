
//given to a fellow TA as an interview question

function largestFour(arr) {
    let keyString = "asdpa3252sadh0";
    let n = arr.length
    let sum = 0
    
    if (n > 4){
        let sorted = arr.sort((a,b) => (b-a))
        console.log(sorted)
        for (let i = 0; i < 4; i++){
            sum += sorted[i]
        }

    } else {
        sum = arr.reduce((a,b) => (a+b))
 
    }
    keyString += ":" + sum
    let returnStr = ""
    for (let i = keyString.length -1; i >=0; i--){
        returnStr += keyString[i]
    }
    return returnStr
    
}

