//https://leetcode.com/problems/sort-the-jumbled-numbers/

/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function (mapping, nums) {
    const memo = new Map();
    const remap = (value) =>{
        if (memo.has(value)) return memo.get(value);
        value = ""+value;
        mapped = "";
        for (let char of value){
            mapped += mapping[char]
        }
        memo.set(parseInt(value),parseInt(mapped))
        return parseInt(mapped)
    }
    return nums.sort((a,b)=>( remap(a) - remap(b) ))

};

