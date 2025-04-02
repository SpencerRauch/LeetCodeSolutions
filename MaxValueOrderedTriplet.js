/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    const value = (i,j,k) => (nums[i] - nums[j]) * nums[k]
    let max = 0;
    for (let i = 0; i < nums.length-2; i++){
        for (let j = i+1; j < nums.length-1; j++){
            for (let k = j + 1; k < nums.length; k++){
                let check = value(i,j,k)
                if (check > 0){
                    max = Math.max(check,max)
                }
            }
        }
    }
    return max
}; //brute force On^3



/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    let maxI = 0
    let maxDif = 0
    let maxRes = 0
    for ( let k = 0; k < nums.length; k++ ){
        maxRes = Math.max(maxRes, maxDif * nums[k])
        maxDif = Math.max(maxDif, maxI - nums[k])
        maxI = Math.max(maxI, nums[k])
    }
    return maxRes
};

// O(n) -- if we consider k as fixed, the maximal value will found using the largest difference in i and j appearing before k