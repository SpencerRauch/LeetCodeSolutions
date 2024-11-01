/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    const len = word1.length;
    if (word2.length != len) return false
    let word1map = new Map()
    let word1arr = []
    let word2map = new Map()
    let word2arr = []
    for (let i = 0; i < len; i++){
        let char1 = word1[i]
        let char2 = word2[i]
        if (word1map.has(char1)){
            word1map.set(char1, word1map.get(char1)+1)
        } else {
            word1map.set(char1,1)
        }
        if (word2map.has(char2)){
            word2map.set(char2, word2map.get(char2)+1)
        } else {
            word2map.set(char2,1)
        }
    }
    for (const key of word1map.keys()){
        if (!word2map.has(key)) return false
        word1arr.push(word1map.get(key))
    }
    for (const key of word2map.keys()){
        if (!word1map.has(key)) return false
        word2arr.push(word2map.get(key))
    }
    word1arr.sort((a,b) => (a-b))
    word2arr.sort((a,b) => (a-b))
    if (word1arr.length != word2arr.length) return false
    for (let i = 0; i < word1arr.length; i++){
        if (word1arr[i] != word2arr[i]) return false
    }
    return true

};