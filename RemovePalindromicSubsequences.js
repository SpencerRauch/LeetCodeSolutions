/**
 * @param {string} s
 * @return {number}
 */
 var removePalindromeSub = function(s) {
    if (isPalindrome(s)){
        return 1;
    }
    else return 2;
    
};

var isPalindrome = (s) => {
    for (let i =0; i < s.length/2; i++){
        if (s[i] != s[s.length-i-1]){
            return false;
        }
    }
    return true;
}
// https://leetcode.com/problems/remove-palindromic-subsequences/