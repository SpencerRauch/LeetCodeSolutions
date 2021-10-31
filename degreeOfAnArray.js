// https://leetcode.com/problems/degree-of-an-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findShortestSubArray = function(nums) {
     debugger;
    let dict = {};
    for (let i = 0; i < nums.length; i++){
        if (nums[i] in dict){
            dict[nums[i]] += 1;
        } else dict[nums[i]] = 1;
    }
    let entries = Object.entries(dict).sort((a,b) => (b[1]-a[1]));
    let degree = entries[0][1];
    let onlybiggest = entries.filter(a => a[1] == degree);
    let shortestLength = nums.length;
    for(let i = 0; i < onlybiggest.length; i++){
        let num = Number(onlybiggest[i][0]);
        let first = nums.indexOf(num);
        let last = nums.lastIndexOf(num);
        let sub = nums.slice(first,last+1);
        shortestLength = Math.min(shortestLength, sub.length);
    }
    return shortestLength;
};
console.log(findShortestSubArray([1,2,2,3,1]))