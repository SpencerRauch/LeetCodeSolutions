/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    if (isNaN(s[0]) && s[0] != "+" && s[0] != "-") return 0; // if the first character isNaN and not a + or -, we'll return 0
    let neg = false;
    let intStr = "";
    let idx = 0;
    while (s[idx] == " "){  // move past white space
        idx++
    }
    if (isNaN(s[idx])){ //look for signing after white space
        if (s[idx] == "-"){
            neg = true
        } else if (s[idx] != "+"){
            return 0; // if we've got a NaN after the whitespace that's not a plus or minus, we're done
        }
        idx++
    }
    if (isNaN(s[idx]) || s[idx] == " ") return 0; // "if no digits were read, return 0"

    while (idx < s.length && !isNaN(s[idx])){ // build string to convert to int
        intStr += s[idx]
        idx++
    }
    
    let int = parseInt(intStr)// convert to int
    if (neg){ // signing and clamping
        if (int > (2**31)){ // clamp before signing if neg
            int = (2**31)
        }
        int *= -1
    } else {
        if (int > (2**31)-1){ // just clamp
            int = (2**31)-1
        }
    }
    return int;
};


//reviist 2025:

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const min = -Math.pow(2,31);
    const max = Math.pow(2,31)-1;
    let numString = "";
    let negative = false;
    let i = 0;
    s = s.trimStart();
    if (s[i] == "-"){
        negative = true;
        i++
    } else if (s[i] == "+"){
        i++
    }
    while(!isNaN(parseInt(s[i]))){
        numString += s[i]
        i++
    }
    if (numString.length == 0) return 0
    if (negative) numString = "-" + numString
    let num = parseInt(numString);
    if (num < min) num = min;
    if (num > max) num = max;
    return num
    
};