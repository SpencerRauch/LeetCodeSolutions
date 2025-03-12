// https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let n = nums.length
    if (nums[0] > 0 || nums[n-1] < 0) return nums.length
    if (nums[0] == 0 && nums[n-1] == 0) return 0
    let i = 1;
    while (nums[i] < 0){
        i++
    }
    let zeroes = 0;
    while (nums[i] == 0){
        zeroes++
        i++
    }
    return Math.max(nums.length - i,i - zeroes)


};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    const firstNonNeg = (arr) =>{
        let left = 0
        let right = arr.length -1
        let index = arr.length
        while (left <= right){
            mid = Math.floor((left+right)/2)
            if (arr[mid] < 0){
                left = mid + 1
            } else {
                right = mid - 1
                index = mid
            }
        }
        return index
    }

    const firstPos = (arr) => {
        let left = 0
        let right = arr.length -1
        let index = arr.length
        while (left <= right){
            let mid = Math.floor((left+right)/2)
            if (arr[mid] <= 0){
                left = mid +1
            } else {
                right = mid -1
                index = mid
            }
        }
        return index
    }
    return Math.max(firstNonNeg(nums), nums.length - firstPos(nums))

};