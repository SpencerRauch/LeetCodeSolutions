/**
 * https://leetcode.com/problems/decode-string/
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let result = "";
    function decode(i){
        let num = ""
        while(!isNaN(s[i])){
            num += s[i]
            i++
        }
        num = +num;
        let work = "";
        for (var j = i +1; j <s.length;j++){
            if (s[j] == "]") break
            if (!isNaN(s[j])){
                const [decoded,index] = decode(j)
                work += decoded
                j = index -1;
            } else {
                work += s[j]
            }
        }
        return [work.repeat(num),j+1]
    }
    let i = 0;
    while (i < s.length){
        if (!isNaN(s[i])){
            const [decoded,index] = decode(i)
            result += decoded;
            i = index;
        } else {
            result += s[i];
            i++;
        }
    }

    return result
}
