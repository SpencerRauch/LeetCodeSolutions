/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
 var brokenCalc = function(startValue, target) {
    let answer = 0;
    while (target > startValue){
        answer++
        if (target % 2 == 1){
            target++;
        }  
        else {
            target /= 2;
        }
    }
    return answer + startValue - target;
};

// https://leetcode.com/problems/broken-calculator/submissions/