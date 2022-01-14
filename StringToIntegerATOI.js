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
    if (idx < s.length && isNaN(s[idx])){ //look for signing after white space
        if (s[idx] == "-"){
            neg = true
        } else if (s[idx] == "+"){
            neg = false 
        } else return 0;
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
