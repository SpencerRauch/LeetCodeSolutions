/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function (s, p) {
    let keyMap = {}
    let count = p.length
    let returnArr = []

    for (char of p) {
        if (keyMap[char]) {
            keyMap[char] += 1
        } else {
            keyMap[char] = 1
        }
    }
    
    let left = 0;
    let right = 0;
    while (right < s.length){
        if (keyMap[s[right]] > 0){
            count--
        } 
        keyMap[s[right]]--
        
        right++;
        
        if (count === 0) {
            returnArr.push(left)
        }
        
        if (right - left == p.length){
            if (keyMap[s[left]] >= 0) count++;
            keyMap[s[left]]++
            left++
        }
        
        
    }
    return returnArr
};
//https://leetcode.com/problems/find-all-anagrams-in-a-string/submissions/