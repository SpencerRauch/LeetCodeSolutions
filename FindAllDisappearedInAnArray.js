/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function (nums) {
    debugger;
    nums.sort((a, b) => a - b);
    let returnArr = [];
    //finds missing numbers at the begining
    if (nums[0] != 1){
        x = 1;
        while (x < nums[0]){
            returnArr.push(x) 
            x++;
            
        } 
    }
    // finds missing numbers in the middle
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < i) {
            let x = nums[i - 1] + 1
            while (x < nums[i]) {
                returnArr.push(x)
                x++;
            }

        } else if (nums[i] > i+1){
            let x = nums[i-1] + 1
            while (x < nums[i]) {
                returnArr.push(x)
                x++;
            }
            
        }

    } 
    // finds missing numbers at the end
    if (nums[nums.length-1] != nums.length){
        let x = nums[nums.length-1] +1;
        while (x <= nums.length){
            returnArr.push(x)
            x++
        }
    }
    return returnArr;
}

console.log(findDisappearedNumbers([3,11,8,16,4,15,4,17,14,14,6,6,2,8,3,12,15,20,20,5]));

//https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array