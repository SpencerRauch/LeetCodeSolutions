/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// TLE version
var maxOperations = function(nums, k) {
    let iterator = 0;
    let count = 0;
    while (iterator < nums.length-1){
        let search = iterator + 1
        const diff = k - nums[iterator];
        while(search < nums.length && nums[search] != diff){
            search++
        }
        if (nums[search] == diff){
            nums[search] = "x"
            nums[iterator] = "x"
            count++
        }
        iterator++
    }
    return count
};

//two pointers, submits

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a,b) => (a-b))
    let fwd = 0;
    let bwd = nums.length-1;
    let count = 0;
    while(fwd < bwd){
        const sum = nums[fwd] + nums[bwd]
        if (sum == k){
            count++
            fwd++
            bwd--
        }
        if (sum < k){
            fwd++
        }
        if (sum > k){
            bwd--
        }
    }
    return count
};