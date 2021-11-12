/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {
        ']':'[',
        '}':'{',
        ')':'('
    }
   let open = [];
    for (let i= 0; i<s.length;i++){
        if (s[i] == '(' || s[i] == '{' || s[i] == '['){
            open.push(s[i]);
        }  else if (map[s[i]] != open.pop()) return false;
            
    } 

    return open.length == 0
};
console.log(isValid('{'))

// https://leetcode.com/problems/valid-parentheses/submissions/