/**
 * https://leetcode.com/problems/removing-stars-from-a-string/
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let stack = [];
    for (let char of s){
        if (char == '*'){
            stack.pop()
        } else {
            stack.push(char)
        }
    }
    return stack.join("")
};

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let stars = 0;
    let rtn = ""
    for (let i = s.length-1; i >= 0; i--){
        if (s[i] == "*"){
            stars++
        } else if (stars > 0){
            stars--
        } else {
            rtn = s[i] + rtn
        }
    }
    return rtn
};