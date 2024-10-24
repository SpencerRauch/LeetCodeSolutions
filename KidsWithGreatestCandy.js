/**
 * https://leetcode.com/problems/kids-with-the-greatest-number-of-candies
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies);
    const result = []
    for (let candy of candies){
        if(candy + extraCandies >= max){
            result.push(true)
        } else {
            result.push(false)
        }
    }
    return result
};