/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let int = 0;
    for (let i = 0; i < s.length; i++){
        switch(s[i]){
            case "I":
                if (s[i+1] == "V"){
                    int += 4;
                    i++;
                } else if ( s[i+1] == "X"){
                    int += 9;
                    i++;
                } else int +=1;
                break;
            case "X":
                if (s[i+1] == "L"){
                    int += 40;
                    i++;
                } else if ( s[i+1] == "C"){
                    int += 90;
                    i++;
                } else int +=10;
                break;
            case "C":
                if (s[i+1] == "D"){
                    int += 400;
                    i++;
                } else if ( s[i+1] == "M"){
                    int += 900;
                    i++;
                } else int +=100;
                break;
            case "L":
                int+= 50;
                break;
            case "V":
                int +=5;
                break;
            case "D":
                int += 500;
                break;
            case "M":
                int += 1000;
        }
    }
    return int;
};

function romanToInt2 (s){
    const romans = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }
    let int = 0;
    for (let i=0; i < s.length; i++){
        if (romans[s[i]] < romans[s[i+1]]){
            total += romans[s[i+1]] - romans[s[i]]
            i++
        } else {
            total += romans[s[i]]
        }
    }
    return int;
}

