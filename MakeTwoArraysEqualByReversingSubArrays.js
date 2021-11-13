// https://leetcode.com/problems/make-two-arrays-equal-by-reversing-sub-arrays/

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    //Since target and arr have the same length problem can be simplied to knowing if both arrays contain all the same elements.

    //So we sort the arrays
    target = target.sort((a,b) => (a-b))
    arr = arr.sort((a,b) => (a-b))

    //and check for value equivalency
    for (let i = 0; i < target.length; i++){
        if (arr[i] != target[i]) return false
    }
    return true;
    
};
