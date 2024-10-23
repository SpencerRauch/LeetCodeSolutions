/**
 * https://leetcode.com/problems/greatest-common-divisor-of-strings
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    let longer = "";
    let shorter = "";
    if (str1.length > str2.length) {
        longer = str1
        shorter = str2
    } else if (str2.length > str1.length) {
        longer = str2
        shorter = str1
    } else {
        if (str1 === str2) return str1
        return ""
    }
    let temp = "";
    let builder = shorter;
    let first = true;
    while (builder.length > 0) {
        temp += builder;
        if (temp.length >= longer.length) {
            if (temp === longer) {
                let count = shorter.length / builder.length
                if (count % 1 == 0) {
                    shortConfirm = builder;
                    for (let i = 0; i <count-1; i++ ){
                        shortConfirm += builder;
                    }
                    if (shortConfirm === shorter){
                        return builder
                    }
                }
            }
            temp = "";
            if (first) {
                builder = builder.substring(0, builder.length / 2)
                first = false
            } else {
                builder = builder.substring(0, builder.length-1)
            }
        }

    }
    return "";
};