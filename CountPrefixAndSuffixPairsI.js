// https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/

/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    const isPrefixAndSuffix = (a, b) => {
        let x = 0;
        let y = b.length-a.length;
        for (let i = 0; i < a.length; i++){
            if (b[x] != a[i] || b[y] != a[i]){
                return false
            }
            x++
            y++
        }
        return true
    }
    let count = 0;
    for (let i = 0; i < words.length-1; i++){
        for (let j = i+1; j < words.length; j++ ){
            if (isPrefixAndSuffix(words[i], words[j])) count++
        }
    }
    return count
};