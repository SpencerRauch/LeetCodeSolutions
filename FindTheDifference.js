/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
    let smap = {}
    let tmap = {}
    for (let char of s){
        smap[char] ? smap[char]++ : smap[char] =1;
    }
    for (let char of t){
        tmap[char] ? tmap[char]++ : tmap[char] =1;
    }
    
    for (let char of t){
        if (smap[char] !== tmap[char])
            return char
    }
};

//https://leetcode.com/problems/find-the-difference