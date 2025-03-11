/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    const n = s.length;
    let left = 0;
    let right = 0;
    let ans = 0;
    let counts = {'a':0,'b':0,'c':0}
    while (right < n){
        counts[s[right]]++
        while (counts['a'] > 0 && counts['b'] > 0 && counts['c'] > 0){
            ans += n - right
            counts[s[left]]--
            left++
        }
        right++
    }
    return ans
};

/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let last = [-1,-1,-1]
    let ans = 0
    for (let i = 0; i < s.length; i++){
        last[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i
        ans += Math.min(...last) + 1 // will add 0 if not all chars found yet
    }
    return ans

};