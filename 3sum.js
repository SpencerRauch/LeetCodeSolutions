/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function (nums) {

    let output = []
    nums.sort((a, b) => (a - b))
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                    if (nums[i] + nums[j] + nums[k] == 0) {
                        let arr = [nums[i], nums[j], nums[k]]
                        let uniqueflag = true;
                        for (let a = 0; a < output.length; a++){
                            if (output[a][0] == arr[0] && output[a][1] == arr[1] && output[a][2] == arr[2]){
                                uniqueflag = false;
                                break;
                            }
                        }
                        
                        if (uniqueflag){
                            output.push(arr);
                        }                    
                }
            }
        }
    }
    return output;
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSumtake2 = function (nums) {

    let output = ""
    let returnArr = []
    nums.sort((a, b) => (a - b))
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                    if (nums[i] + nums[j] + nums[k] == 0) {
                        let string = "" + nums[i] + "*"+ nums[j] + "*" + nums[k];
                        if (!output.includes(string)){
                            output += string;
                            returnArr.push([nums[i],nums[j],nums[k]])
                        }
                }
            }
        }
    }
    return returnArr;
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSumWORKING = function (nums) {

    let output=[];
    nums.sort((a,b) =>(a-b));
    for(let i=0;i<nums.length;i++){
        if(i!=0 && nums[i-1]==nums[i]){
            continue;
        }
        let j=i+1
        let k=nums.length-1;
        
        while(j<k){
            if (nums[i]+nums[j]+nums[k] == 0){
                output.push([nums[i],nums[j],nums[k]]);
                j++;
                k--;
                while(j<k && nums[j-1]==nums[j]){
                    j++;
                }
            }else if(nums[i]+nums[j]+nums[k]<0){
                  j++;
              }else{
                  k--;
              }
        }
    }
    return output;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))

// https://leetcode.com/problems/3sum