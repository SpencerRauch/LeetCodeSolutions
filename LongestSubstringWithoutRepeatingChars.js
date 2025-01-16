/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right = 0;
    let maxLength = 0;
    const seen = new Set()
    for (;right < s.length; right++){
        while(seen.has(s[right])){
            seen.delete(s[left])
            left++
        }
        seen.add(s[right])
        maxLength = Math.max(maxLength, right-left+1)
    }
    return maxLength
};