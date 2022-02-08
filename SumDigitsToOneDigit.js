/**
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num) {
    if (num < 10) return num;
    let sum = 0
    while (num > 0){
        sum += num % 10
        num = Math.floor(num/10)
    }
    return addDigits(sum)
    
};

/**
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num) {
    if (num == 0) return 0
    if (num % 9 == 0) return 9
    else return num % 9 //WHAT THIS WORKS?! MATH YOU CRAZY 
};
//https://leetcode.com/problems/add-digits