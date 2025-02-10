/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    const isDigit = c => c >= "0" && c <= "9"
    const filtered = []
    for (let char of s){
        if (isDigit(char)){
            filtered.pop()
        } else {
            filtered.push(char)
        }
    }
    return filtered.join("")

};