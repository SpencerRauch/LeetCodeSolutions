/**
 * https://leetcode.com/problems/reverse-words-in-a-string
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = [];
    let word = "";
    for (let c of s){
        if (c == " "){
            if (word.length > 0){
                words.push(word)
                word = "";
            }
        } else {
            word += c;
        }
    }
    if (word.length > 0){
        words.push(word)
    }
    return words.reverse().join(" ")
};