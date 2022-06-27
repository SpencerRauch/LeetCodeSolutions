/**
 * @param {string} n
 * @return {number}
 */
 var minPartitions = function(n) {
    let max = 0;
    for (let char of n){
        if (char == "9") return 9;
        let num = parseInt(char);
        max = Math.max(num, max);
            
    }
    return max;
};

//https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/submissions/