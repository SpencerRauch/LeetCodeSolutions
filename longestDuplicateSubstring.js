// https://leetcode.com/problems/longest-duplicate-substring/

/**
 * @param {string} s
 * @return {string}
 */
var longestDupSubstring = function(s) {
    let maxlength = s.length-1;
    let longestDupSub = ""
    for (let i = 0; i < s.length; i++){
        let currentSub = ""
        let currI = i;
        for (let j = i+1; j < s.length; j++){
            let currJ = j
            while (s[i] == s[j]){
                currentSub += s[i]
                i++;
                j++;
            }
            if (currentSub.length > longestDupSub.length){
                longestDupSub = currentSub;
            }
            if (longestDupSub.length == maxlength){
                return longestDupSub;
            }
            i = currI;
            j = currJ;
            currentSub = "";

        }
    }
    return longestDupSub
};  // this works, but is too slow for all leetcode tests; 62/66

/**
 * @param {string} s
 * @return {string}
 */
 var longestDupSubstring = function(s) {
    let lDS = "";
    let sub = ""
    for (let i = 0; i < s.length-1; i++){
        curI = i;
        sub += s[i];
        while (s.substring(curI+1).includes(sub) && i < s.length-1){
            i++;
            sub += s[i];
        }
        sub = sub.slice(0, -1);
        if (sub.length > lDS.length){
            if (sub.length == s.length-1){
                return sub;
            }
            lDS = sub;
        }
        sub = "";
        i = curI;
        
        
    }
    return lDS;
}; // also works, 65/66 test cases before out of time