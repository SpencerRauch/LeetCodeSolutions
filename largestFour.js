const keyString = "asdpa3252sadh0";

const one = [4, 0, -1, 2];
const resultOne = "5:0hdas2523apdsa";


const two = [-1, 9, 9, 9, 1, 9];
const resultTwo = "63:0hdas2523apdsa";

const three = [-5, -9, 0, -6, 1, 0];
const resultThree = "4-:0hdas2523apdsa";
//returns the sum of the largest 4 values (or all values if  <= 4 present), appended to key string, which is then reversed
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


function largestFour2(arr) {
    let keyString = "asdpa3252sadh0";
    let n = arr.length
    let sum = 0

    if (n > 4){
        let maxs = {"1": Number.MIN_SAFE_INTEGER, "2": Number.MIN_SAFE_INTEGER, "3": Number.MIN_SAFE_INTEGER, "4":Number.MIN_SAFE_INTEGER}
        for (let x of arr){
            if (x >= maxs["1"]){
                maxs['4'] = maxs['3']
                maxs['3'] = maxs['2']
                maxs['2'] = maxs['1']
                maxs['1'] = x
            } else if (x >= maxs["2"]){
                maxs['4'] = maxs['3']
                maxs['3'] = maxs['2']
                maxs['2'] = x
            
            } else if (x >= maxs["3"]){
                maxs['4'] = maxs['3']
                maxs['3'] = x
            } else if (x > maxs['4']){
                maxs['4'] = x
            }
            sum = maxs['1'] + maxs['2'] + maxs['3'] + maxs['4']
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
console.log(largestFour2(two))

