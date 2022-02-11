/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// first working version
 var checkInclusion = function (s1, s2) {
    let permLength = s1.length
    let s1Map = {}
    for (let char of s1) {
        if (s1Map[char]) {
            s1Map[char]++
        }
        else {
            s1Map[char] = 1
        }
    }

    for (let i = 0, j = i + permLength; j <= s2.length; i++, j++) {

        let thisSlice = s2.slice(i, j)
        let is_perm = true
        let workingMap = { ...s1Map }


        for (let k = 0; k < thisSlice.length; k++) {
            if (workingMap[thisSlice[k]] > 0) {
                workingMap[thisSlice[k]]--
            } else {
                is_perm = false
                break;
            }
        }
        if (is_perm) return true;
    }
    return false
};

console.log(checkInclusion('adc', 'dcda'))


//cleaned up a bit
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion2 = function (s1, s2) {
    let s1Map = {}
    
    for (let char of s1) {
        s1Map[char] ? s1Map[char]++ : s1Map[char] = 1
    }

    for (let i = 0, j = i + s1.length; j <= s2.length; i++, j++) {
        let is_perm = true
        let workingMap = { ...s1Map }
        
        for (let k = i; k < j; k++) {
            
            if (workingMap[s2[k]] > 0) {
                workingMap[s2[k]]--
            } else {
                is_perm = false;
                break;
            }
        }
        if (is_perm) return true;
    }
    return false
};

//https://leetcode.com/problems/permutation-in-string
