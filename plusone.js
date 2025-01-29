/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits.reverse()
    let carry = true;
    let i = 0;
    while(carry){
        if ( i == digits.length){
            digits.push(1)
            break
        }
        carry = false
        digits[i]++
        if (digits[i] > 9){
            carry = true
            digits[i] = 0
        }
        i++
    }
    return digits.reverse()

};


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let end = digits.length-1 // let end be the last index of the array of digits
    digits[end] += 1 // increase the digit in the last index by one
    
    while (digits[end] > 9 ){ // loop runs while last digit greater than 9 (ie is 10 and needs to carry over)
        digits[end] = 0; // set current digit to 0
        end--; // move to next digit (in order to "carry the one")
        if (end < 0){ // if end is less than zero, we need to add an index at front with a 1
            return [1, ...digits] // makes a new array with 1 and then everything in digits
        }
        else { //otherwise
            digits[end] += 1 // we carry the one
        }
    }
    return digits

};