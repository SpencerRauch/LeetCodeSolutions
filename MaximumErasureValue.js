/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumUniqueSubarray = function(nums) {
    let hashMap = {};
    let sum = 0;
    let max = 0;
    let left = 0;
    let right = 0;
    while(right < nums.length) {
        if(hashMap.hasOwnProperty(nums[right])) {
            hashMap[nums[right]]++;
        } else {
            hashMap[nums[right]] = 1;
        }
        sum+=nums[right];
        if (hashMap[nums[right]] > 1) {
            while(hashMap[nums[right]] > 1) {
                sum-=nums[left];
                hashMap[nums[left]]--;
                left++;
            }
        }
        max = Math.max(max, sum);
        right++;
    }

    return max;
};

console.log(maximumUniqueSubarray([4,2,4,5,6]))