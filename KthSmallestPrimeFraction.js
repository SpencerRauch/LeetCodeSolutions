// https://leetcode.com/problems/k-th-smallest-prime-fraction/
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
    let fractions = [];
    for (let i =0; i < arr.length; i++){
        for( let j = i+1; j < arr.length; j++){
            fractions.push([arr[i],arr[j]])
        }
    }
    fractions.sort((a,b) =>(a[0]/a[1]) - (b[0]/b[1]))
    return fractions[k-1]
};
