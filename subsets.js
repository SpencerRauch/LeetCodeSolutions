/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let generated = [[]]
    for (let i = 0; i < nums.length; i++){
        let newSets = []
        for (let set of generated){
            newSets.push([...set, nums[i]])
        }
        generated = [...generated, ...newSets]
    }

    return generated
};

console.log(subsets([1,2,3]))

//https://leetcode.com/problems/subsets/