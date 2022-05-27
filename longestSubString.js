const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew";
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"



/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let maxSub = 0;

    /* edge cases */
    if (s.length == 1) return 1; //length of 1 will always return 1
    if (s.length == 2){ //length of 2 can only be 1 or 2 based on comparing items
        return s[0] == s[1] ? 1 : 2;
    }

    for (let i = 0; i < s.length; i++){ // iterate through string
        if (s.length - i <= maxSub) break //if our maxSub length is greater than remaining length, we are done
        for (let j = i+1; j < s.length; j++){ //start j after i
            if (s.substring(i,j).includes(s[j])) { //look at the substring up to j, does it include s[j]?
                maxSub = Math.max(s.substring(i,j).length, maxSub) //if it does, we've gone as far as we can for this substring
                break; //so we update maxSub and break
            } else if (j == s.length-1){ //else, if we're at the end of the string
                maxSub = Math.max(s.substring(i).length, maxSub) //check the maxSub against current substring
            }
        }   
    }
    return maxSub; 
};


/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstringBad= function(str) {
    let lookUp = {} //will be used to check if we've seen a letter with an O(1) operation
    let lengthOfLongest = str.length >= 1 ? 1 : 0 ; //value to be returned
    let currentSub = "" //working substring variable, we will build our substrings here

    for (let i = 0; i < str.length; i++){
        let char = str[i]
        if (lookUp[char]){ // if we've seen this char already, process current string
            lengthOfLongest = Math.max(currentSub.length, lengthOfLongest) //check if we have a new max length
            currentSub = "" //reset variables
            lookUp = {}
        }
        else { // if we haven't, add it to our current substring as well as our lookup table
            currentSub += char
            lookUp[char] = true
        }
    }
    lengthOfLongest = Math.max(currentSub.length, lengthOfLongest)
    //reset variables
    lookUp = {}
    currentSub = ""

    /*loop again, but from back to front this time
    this solves for any substrings we missed going forward due to repeating chars */
    for (let i = str.length-1; i >= 0; i--){
        let char = str[i]
        if (lookUp[char]){ 
            lengthOfLongest = Math.max(currentSub.length, lengthOfLongest) 
            currentSub = "" 
            lookUp = {}
        }
        else {
            currentSub += char
            lookUp[char] = true
        }
    }
    lengthOfLongest = Math.max(currentSub.length, lengthOfLongest)

    return lengthOfLongest

}

console.log(lengthOfLongestSubstring(str1))
console.log(lengthOfLongestSubstring(str2))
console.log(lengthOfLongestSubstring(str3))
console.log(lengthOfLongestSubstring(str4))


let obj = {
    'a': 4,
    'b': 6,
    'c': 9,
    'e': 10
}

console.log(Math.max(...Object.values(obj)))