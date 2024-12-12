/**
 * https://leetcode.com/problems/take-gifts-from-the-richest-pile
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    let count = 0;
    while(count < k){
        let maxIdx = 0;
        for (let i = 1; i < gifts.length; i++){
            if (gifts[i] > gifts[maxIdx]){
                maxIdx = i;
            }
        }
        gifts[maxIdx] = Math.floor(Math.sqrt(gifts[maxIdx]))
        count++
    }
    return gifts.reduce((a,b) => a+b);
};