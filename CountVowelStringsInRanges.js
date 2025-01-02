/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
// brute force Time limit exceeded
var vowelStrings = function(words, queries) {
    const meetsCriteria = [];
    const results = [];
    const vowelCheck = (word) =>{
        const vowels = {"a":true,"e":true,"i":true, "o":true,"u":true}
        if (vowels.hasOwnProperty(word[0]) && vowels.hasOwnProperty(word[word.length-1])){
            return true
        }
        return false;
    }
    for (let i = 0; i < words.length; i++){
        meetsCriteria[i] = vowelCheck(words[i])
    }

    for (let i = 0; i < queries.length; i++){
        const range = queries[i]
        let start = range[0]
        const end = range[1]
        let count = 0;
        while(start <= end){
            if (meetsCriteria[start]){
                count++
            }
            start++
        }
        results.push(count)
    }

    return results
};

// using prefix sum, passes all tests
/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    const prefixSum = [];
    const results = [];
    const vowels = new Set(['a','e','i','o','u'])
    let sum = 0;
    for (let i = 0; i < words.length; i++){
        const word = words[i];
        if (vowels.has(word[0]) && vowels.has(word[word.length-1])){
            sum++
        }
        prefixSum.push(sum)
    }

    for (let i = 0; i < queries.length; i++){
        const range = queries[i]
        const start = range[0]
        const end = range[1]
        if (start == 0){
            results.push(prefixSum[end])
        } else {
            results.push(prefixSum[end] - prefixSum[start-1])
        }
    }

    return results
};