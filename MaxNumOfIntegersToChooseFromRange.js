//https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-range/

var maxCount = function(banned, n, maxSum) {
    const banSet = new Set(banned)
    let sum = 0;
    let count = 0;
    for (let i = 1; i <= n; i++){
        if (banSet.has(i)) continue;
        if (sum + i <= maxSum){
            sum += i;
            count++;
        } else {
            break;
        }
    }
    return count
};