/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
 var removeKdigits = function(num, k) {
    let len = num.length
    if (k == num.length) return "0"
    if (k == 0) return num
    let min = parseInt(num)
    if (k > 0){
        for (let i = 0; i <num.length; i++){
            min = Math.min(removeKdigits((num.slice(0,i)+num.slice(i+1)), k-1), min)
        }
    }

    return `${min}`
    
};
// correct output, Time Limit Exceeded
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
 var removeKdigits = function(numStr, k) {
    if (numStr.length == k) return '0'
    if (k == 0) return numStr
    let minValStack = []
    
    for (let char of numStr){
        while(minValStack.length && minValStack[minValStack.length-1] > char && k > 0){
            minValStack.pop()
            k--
        }
        minValStack.push(char)
    }
     
    while(k){
        k--
        minValStack.pop()
    }
    numStr = minValStack.join("")
    return `${parseInt(numStr)}`    
};
// doesn't work because the number becomes too large for parseInt --- resorting to manually removing leading 0s from string

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
 var removeKdigits = function(numStr, k) {
    if (numStr.length == k) return '0'
    if (k == 0) return numStr
    let minValStack = []
    
    for (let char of numStr){
        while(minValStack.length && minValStack[minValStack.length-1] > char && k > 0){
            minValStack.pop()
            k--
        }
        minValStack.push(char)
    }
     
    while(k){
        k--
        minValStack.pop()
    }
    numStr = minValStack.join("")
    for (var i = 0; i < numStr.length; i++){
        if (numStr[i] != '0'){
            break
        }
    }
    return numStr.slice(i) 
};
//success