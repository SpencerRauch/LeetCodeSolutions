//https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    const len = A.length;
    const seenArray = new Array(len+1).fill(0);
    const result = new Array(len).fill(0);
    let count = 0;
    for (let i = 0; i < len; i++){
        const aVal = A[i];
        const bVal = B[i];
        seenArray[aVal]++;
        seenArray[bVal]++;
        if (seenArray[aVal] == 2) count++;
        if (aVal != bVal && seenArray[bVal] == 2) count++
        result[i] = count;
    }
    return result
};

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    const len = A.length;
    const seenArray = new Array(len+1).fill(0);
    const result = new Array(len).fill(0);
    let count = 0;
    for (let i = 0; i < len; i++){
        const aVal = A[i];
        const bVal = B[i];
        seenArray[aVal]++;
        if (seenArray[aVal] == 2) count++;
        seenArray[bVal]++;
        if (seenArray[bVal] == 2) count++
        result[i] = count;
    }
    return result
};

//optimization: change order of operations and we can remove the equivalent check