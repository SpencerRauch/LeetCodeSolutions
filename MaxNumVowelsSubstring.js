/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    const isVowel = { a: true, e: true, i: true, o: true, u: true };
    let max = 0;
    let count = 0;
    for (let i = 0; i < k; i++){
        if (isVowel[s[i]]){
            count++
        }
    }
    max = count;
    for (let i = k; i < s.length; i++){
        if (isVowel[s[i-k]]){
            count--
        }
        if (isVowel[s[i]]){
            count++
        }
        max = Math.max(max, count)
    }
    return max
}