/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function (nums) {
    debugger;
    let sorted = nums.sort((a, b) => a - b);
    let returnArr = [];
    if (sorted[0] != 1){
        x = 1;
        while (x < sorted[0]){
            returnArr.push(x) 
            x++;
            
        } 
    }
    for (let i = 1; i < nums.length; i++) {
        if (sorted[i - 1] < i) {
            let x = sorted[i - 1] + 1
            while (x < sorted[i]) {
                returnArr.push(x)
                x++;
            }

        } else if (sorted[i] > i+1){
            let x = sorted[i-1] + 1
            while (x < sorted[i]) {
                returnArr.push(x)
                x++;
            }
            
        }

    } 
    if (sorted[sorted.length-1] != sorted.length){
        let x = sorted[sorted.length-1] +1;
        while (x <= sorted.length){
            returnArr.push(x)
            x++
        }
    }
    return returnArr;
}

console.log(findDisappearedNumbers([3,11,8,16,4,15,4,17,14,14,6,6,2,8,3,12,15,20,20,5]));

//https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array