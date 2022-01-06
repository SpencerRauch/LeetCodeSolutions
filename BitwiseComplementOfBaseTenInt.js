var bitwiseComplement = function(n) {
    let binaryN = (n).toString(2)
    let complement = ""
    for (char of binaryN){
        complement += char == '1' ? 0 : 1;
    }
    return(parseInt(complement, 2).toString(10))
};

// https://leetcode.com/problems/complement-of-base-10-integer/