/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let x = 0;
    let y = 0;
    for (let i = 0; i < num.length; i+=2){
        x += +num[i]
        if (i+1 < num.length){
            y += +num[i+1]
        }
    }
    return x == y
};

//https://leetcode.com/problems/check-balanced-string/