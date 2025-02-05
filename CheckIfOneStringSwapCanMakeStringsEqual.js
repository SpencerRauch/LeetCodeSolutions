// https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    let differences = []
    for (let i = 0; i < s1.length; i++){
        if (s1[i] != s2[i]){
            differences.push(i)
            if (differences.length > 2) return false
        }
    }
    if (differences.length == 0) return true
    if (differences.length != 2) return false
    let x = differences[0]
    let y = differences[1]

    return s1[x] == s2[y] && s1[y] == s2[x]

};