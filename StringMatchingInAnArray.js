//https://leetcode.com/problems/string-matching-in-an-array/
// 1408. String Matching in an Array


var stringMatching = function(words) {
    const res = []
    for (let i = 0; i < words.length; i++){
        const word = words[i];
        for (let j = 0; j < words.length; j++){
            if ( i == j) continue
            if (words[j].includes(word)){
                res.push(word)
                break;
            } 
        }
    }
    return res
};

var stringMatching = function(words) {
    const allWords = words.join(' ');
    return words.filter(word => allWords.indexOf(word) !== allWords.lastIndexOf(word));
}
