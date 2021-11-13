/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let answer = new Array(temperatures.length).fill(0)
    for (let i = 0; i < temperatures.length; i++){
        for (let j = i +1; j < temperatures.length; j++){
            if (temperatures[j]> temperatures[i]){
                answer[i] = j - i;
                break;
            }
        }
    }
    
    return answer;
};
console.log(dailyTemperatures([1,2,3,2,5,6,7]))

// https://leetcode.com/problems/daily-temperatures