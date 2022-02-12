/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
 var ladderLength = function (beginWord, endWord, wordList) {
    let steps = 1
    let queue = [beginWord]

    while (queue.length) {
        let nextQ = []
        for (let word of queue) {
            if (word == endWord) return steps
            for (let i = 0; i < word.length; i++) {
                for (let j = 0; j < 26; j++) {
                    let newChar = String.fromCharCode(j + 97)
                    if (newChar !== word[i]) {
                        let newWord = word.slice(0, i) + newChar + word.slice(i + 1)
                        let idx = wordList.indexOf(newWord)
                        if (idx >= 0) {
                            nextQ.push(newWord)
                            delete wordList[idx]
                            
                        }
                    }
                }
            }
        }
        queue = nextQ
        steps++
    }
    return 0

};

//Time Limit Exceeded -- may could rewrite to use a set instead of an array
//https://leetcode.com/problems/word-ladder/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
 var ladderLength = function (beginWord, endWord, wordList) {
    let steps = 1
    let queue = [beginWord]
    let wordSet = new Set(wordList)
    while (queue.length) {
        let nextQ = []
        for (let word of queue) {
            if (word == endWord) return steps
            for (let i = 0; i < word.length; i++) {
                for (let j = 0; j < 26; j++) {
                    let newChar = String.fromCharCode(j + 97)
                    let newWord = word.slice(0, i) + newChar + word.slice(i + 1)
                    if (wordSet.has(newWord)){
                        nextQ.push(newWord)
                        wordSet.delete(newWord)
                        
                    }
                }
            }
        }
        queue = nextQ
        steps++
    }
    return 0

};

//yep, set version passes, flying colors