/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (n == 0) return true;
    for (let i = 0; i < flowerbed.length; i++){
        if ((flowerbed[i-1] == undefined || flowerbed[i-1] == 0) &&
            flowerbed[i] == 0 &&
            (flowerbed[i+1] == undefined || flowerbed[i+1] == 0)){
            flowerbed[i] = 1;
            n--;
            if (n == 0) return true;
        }
    }
    return false;
};
// https://leetcode.com/problems/can-place-flowers/