/**
 * @param {string} s
 * @return {string}
 */
 var freqAlphabets = function(s) {
    let returnString = ""
    for (let i = s.length-1; i >= 0; i--){
        let val = 'a'.charCodeAt(0)-1;
        if (s[i]=='#'){
            val += Number(s.slice(i-2,i));
            i -= 2;
        } else {
            val += Number(s[i]);
        }
        returnString = String.fromCharCode(val) + returnString;      
    }
    return returnString;
};
console.log(freqAlphabets("10#11#12"))

// https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/submissions/