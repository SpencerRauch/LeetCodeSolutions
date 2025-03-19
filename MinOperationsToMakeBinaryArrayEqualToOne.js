/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const n = nums.length
    const flipThree = (arr, i) =>{
        arr[i] = arr[i] == 1 ? 0 : 1;
        arr[i+1] = arr[i+1] == 1 ? 0 : 1;
        arr[i+2] = arr[i+2] == 1 ? 0 : 1;

    }
    let count = 0
    for (let i = 0; i < n-2; i++){
        if (nums[i] != 1){
            flipThree(nums,i)
            count++
        } 
            
    }
    if (nums[n-1] == 0 || nums[n-2] == 0) return -1
    return count
};


//and is faster here
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const n = nums.length
    const flipThree = (arr, i) =>{
        arr[i] = arr[i] == 1 ? 0 : 1;
        arr[i+1] = arr[i+1] == 1 ? 0 : 1;
        arr[i+2] = arr[i+2] == 1 ? 0 : 1;

    }
    let count = 0
    for (let i = 0; i < n-2; i++){
        if (nums[i] != 1){
            flipThree(nums,i)
            count++
        } 
            
    }
    if (nums[n-1] == 1 && nums[n-2] == 1) return count
    return -1
};