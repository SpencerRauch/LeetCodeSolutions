// https://leetcode.com/problems/single-number-iii/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var singleNumber = function(nums) {
    let answer = [];
    for (let i=0; i< nums.length; i++){
        let temp = nums[i];
        nums[i] = null;
        if (nums.includes(temp)){
            nums[i] = temp
            continue;
        } else{
            answer.push(temp);
            if (answer.length == 2) return answer
        } 
    }
    return answer;
    
};