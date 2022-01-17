/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
    let words = s.split(" ")
    if (words.length !== pattern.length) return false;
    let patternMap = {}
    let wordMap = {}
    for (let i = 0; i < pattern.length; i++){
        if (patternMap[pattern[i]]){
            patternMap[pattern[i]].push(i)
        } else {
            patternMap[pattern[i]] = [i]
        }
        if (wordMap[words[i]]){
            wordMap[words[i]].push(i)
        } else {
            wordMap[words[i]] = [i]
        }
        
        
    }

    let patternVals = Object.values(patternMap)
    let wordVals = Object.values(wordMap)

    for (let i = 0; i < patternVals.length; i++){
        for (let j = 0; j < patternVals[i].length; j++){
            if (!wordVals[i] || patternVals[i][j] != wordVals[i][j]){
                return false
            }
        }
    }
    return true;
};

// https://leetcode.com/problems/word-pattern/