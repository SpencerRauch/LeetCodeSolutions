//https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings

/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {
    let splits = 1;
    let substrings = new Set();

    function find(s) {
        if (!substrings.has(s)){
            substrings.add(s)
            splits = Math.max(splits, substrings.size)
            substrings.delete(s)
        }

        for (let i = 1; i < s.length; i++){
            const sub = s.substring(0,i)
            if (!substrings.has(sub)){
                substrings.add(sub);
                find(s.substring(i))
                substrings.delete(sub)
            }
        }
    }
    find(s);
    return splits;

};