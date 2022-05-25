/* 
 ██╗ ██╗ 
████████╗
╚██╔═██╔╝
████████╗
╚██╔═██╔╝
 ╚═╝ ╚═╝ 
         
    Given two 🎻 strings S and T containing only lowercase letters and "#" characters,
    return if they are equal when both are typed into empty text editors.
    👉 '#' character means a 'backspace' character.
    i.e., after processing the backspaces, are the two strings equal?
    return true or false
    Ninja Bonus: solve in O(n) time
*/

// ad#clp
// aclp

//          v
const S1 = "ab#c";
// a -> ab -> a -> ac
//          v
const T1 = "ad#c";
// a -> ad -> a -> ac
const expected1 = true;
// Explanation: Both S and T become "ac"

//             v
const S2 = "ab##";
// ["a", "b"]
// "str1"
// a -> ab -> a -> ""

const T2 = "c#d#";
// []
// "str2"
// c -> "" -> d -> "" 
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
// a -> "" -> "" -> c
const T3 = "#a#c";
// "" -> a -> "" -> c
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
// a -> "" -> c
const T4 = "b";
// b
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

function backspaceStringCompare(S, T) {
    let sString = "" // will hold our parsed S
    let tString = "" // will hold our parsed T
    let skip = 0 // count of how many characters to skip
    
    for (let i = S.length-1; i >= 0; i--){ //iterate BACKWARDS through string
        if (S[i] == "#"){ // if current letter is a backspace, increase number of letters to skip
            skip++
        } else { //if current letter is NOT a backspace
            if (skip == 0){ //if we don't need to skip any letters
                sString = S[i] + sString //add current letter to parsed string (in reverse order)
            } else if(skip > 0){ //if we need skip any, 
                skip-- //decrement skip and do nothing else
            }
        }
    }

    skip = 0 //reset skip, in case of S having more backspaces than letters

    for (let i = T.length-1; i >= 0; i--){ //same as above but for T
        if (T[i] == "#"){
            skip++
        } else {
            if (skip == 0){
                tString = T[i] + tString
            } else if(skip > 0){
                skip-- 
            }
        }
    }


    return sString == tString // return simple comparison

 }

console.log(backspaceStringCompare(S1, T1))
console.log(backspaceStringCompare(S2, T2))
console.log(backspaceStringCompare(S3, T3))
console.log(backspaceStringCompare(S4, T4))