// https://leetcode.com/problems/find-unique-binary-string

/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    const n = nums.length
    const numSet = new Set(nums)
    function generateBinaries(working="",solutions=[]){
        if(solutions.length > 0) return
        if(working.length == n){
            if (!numSet.has(working)){
                solutions.push(working)
            }
            return
        }
        generateBinaries(working+"0", solutions)
        generateBinaries(working+"1", solutions)
        return solutions
    }
    let answer = generateBinaries()
    return answer[0]

};

//Cantor's diagonalization argument
//https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument
/*
We start by initializing the answeransto an empty string. To buildans, we need to assign either"0"or"1"to each indexifor indices0ton - 1. How do we assign them soansis guaranteed to be different from every string innums? We know that two strings are different, as long as they differ by at least one character. We can intentionally construct ouransbased on this fact.

For each indexi, we will check thei 
th
 character of thei 
th
 string innums. That is, we checkcurr = nums[i][i]. We then assignans[i]to the opposite ofcurr. That is, ifcurr = "0", we assignans[i] = "1". Ifcurr = "1", we assignans[i] = "0".

What is the point of this strategy?answill differ from every string inat leastone position. More specifically:

ansdiffers fromnums[0]innums[0][0].
ansdiffers fromnums[1]innums[1][1].
ansdiffers fromnums[2]innums[2][2].
...
ansdiffers fromnums[n - 1]innums[n - 1][n - 1].
Thus, it is guaranteed thatansdoes not appear innumsand is a valid answer.
*/

/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let ans = ""
    for (let i = 0; i < nums.length; i++){
        ans += nums[i][i] == "1" ? "0" : "1"
    }
    return ans
};