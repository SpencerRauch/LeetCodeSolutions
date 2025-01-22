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

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = []
    const subsets = []

    const create = (i) =>{
        if (i == nums.length){
            res.push([...subsets]);
            return
        }

        subsets.push(nums[i]) // include current num
        create(i + 1);
        subsets.pop() // don't include current num
        create(i + 1);

        
    }
    create(0)
    return res
};