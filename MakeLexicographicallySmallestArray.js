/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function(nums, limit) {
    const sorted = [...nums].sort((a,b) => (a-b))
    const numToGroup = {}
    numToGroup[sorted[0]] = 0;
    const groupToNums = {0:[sorted[0]]}
    let currentGroup = 0;
    for (let i = 1; i < sorted.length; i++){
        if (Math.abs(sorted[i] - sorted[i-1] > limit)){
            currentGroup++
        }
        numToGroup[sorted[i]] = currentGroup
        if (groupToNums.hasOwnProperty(currentGroup)){
            groupToNums[currentGroup].push(sorted[i])
        } else {
            groupToNums[currentGroup] = [sorted[i]]
        }
    }
    for (let arr of Object.values(groupToNums)){
        arr.sort((a,b)=>b-a)
    }
    for (let i = 0; i < nums.length; i++){
        const group = numToGroup[nums[i]]
        const nextVal = groupToNums[group].pop()
        nums[i] = nextVal
    }
    return nums
};