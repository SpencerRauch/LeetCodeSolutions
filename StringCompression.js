/**
 * https://leetcode.com/problems/string-compression/
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let last = chars[0];
    let count = 1;
    let building = "";
    for ( let i = 1; i < chars.length+1; i++){
        let current = chars[i];
        if (last != current){
            if (count > 1){
                building += last + count;
            } else {
                building += last
            }
            last = current;
            count = 1;
        } else {
            count++
        }
    }
    for (let i = 0; i < building.length; i++){
        chars[i] = building[i]
    }
    return building.length
};

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let last = chars[0];
    let count = 1;
    let writePoint = 0;
    for ( let i = 1; i < chars.length+1; i++){
        let current = chars[i];
        if (last != current){
            chars[writePoint] = last;
            writePoint++;
            if (count > 1){
                let countStr = count.toString();
                for (let char of countStr){
                    chars[writePoint] = char;
                    writePoint++;
                }
            } 
            last = current;
            count = 1;
        } else {
            count++
        }
    }
    return writePoint
};