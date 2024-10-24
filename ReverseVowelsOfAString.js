/**
 * https://leetcode.com/problems/reverse-vowels-of-a-string
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const isVowel = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true,
        A: true,
        E: true,
        I: true,
        O: true,
        U: true
    };
    const toSwap = [];
    const stringArray = [];
    for (let i = 0; i < s.length; i++){
        stringArray.push(s[i])
        if(isVowel[s[i]]){
            toSwap.push(i)
        }
    }
    let x = 0;
    let y = toSwap.length-1 >= 0 ? toSwap.length-1 : 0;
    while ( x < y){
        const xIdx = toSwap[x]
        const yIdx = toSwap[y]
        let temp = stringArray[xIdx]
        stringArray[xIdx] = stringArray[yIdx]
        stringArray[yIdx] = temp
        x++
        y--
    }
    return stringArray.join("")
    
};