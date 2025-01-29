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