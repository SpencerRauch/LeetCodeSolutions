//method that breaks a palindrome by changing one letter to a different letter
function palindromeKiller(palindrome){

    let palindromeArray = palindrome.split("");
    let found = false;
    let odd = palindrome.length % 2 == 1;
    for (let i = 0; i < palindrome.length; i++) {
        if (odd && i == Math.floor(palindrome.length/2)) continue;
        if (palindromeArray[i] !== 'a'){
            palindromeArray[i] = 'a';
            found = true;
            break;
        }
    }
    return found ? palindromeArray.join("") : "impossible";
}

function breakPalindrome(palindromeStr) {
    let outputStr = "";
    let i = 0;
    while(i<palindromeStr.length) {
        let character = palindromeStr[i];
        if(character == "a") {
            outputStr += character;
        } else {
            outputStr += "a";
            break;
        }
        i++;
    }
    outputStr += palindromeStr.slice(i+1, palindromeStr.length+1);
    let reverseStr = outputStr.split("").reverse().join("");
    if(outputStr == palindromeStr || outputStr == reverseStr) {
        return "Impossible";
    }
    return outputStr;
}
console.log(palindromeKiller("racecar"));
console.log(palindromeKiller("aaabbaaa"));
console.log(palindromeKiller("aba"));
console.log(palindromeKiller("xxyxx"));
console.log(breakPalindrome("racecar"));
console.log(breakPalindrome("aaabbaaa"));
console.log(breakPalindrome("aba"));
console.log(breakPalindrome("xxyxx"));

