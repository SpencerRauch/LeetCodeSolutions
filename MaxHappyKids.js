// https://leetcode.com/problems/maximize-happiness-of-selected-children/

/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    happiness.sort((a,b)=>b-a)
    let maxHappy = 0;
    for (let i = 0; i < k; i++){
        maxHappy += happiness[i] - i > 0 ? happiness[i] - i  : 0;
    }
    return maxHappy
};