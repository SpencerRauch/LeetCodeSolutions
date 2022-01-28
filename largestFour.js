const keyString = "asdpa3252sadh0";

const one = [4, 0, -1, 2];
const resultOne = "5:0hdas2523apdsa";


const two = [-1, 9, 0, -6, 1, 0];
const resultTwo = "01:0hdas2523apdsa";

const three = [-5, -9, 0, -6, 1, 0];
const resultThree = "4-:0hdas2523apdsa";
//returns the sum of the largest 4 values, appended to key string, which is then reversed
//given to a fellow TA as an interview question

function largestFour(arr) {
    let keyString = "asdpa3252sadh0";
    let n = arr.length
    let sum = 0
    
    if (n > 4){
        let sorted = arr.sort((a,b) => (b-a))
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

