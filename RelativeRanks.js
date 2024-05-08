//https://leetcode.com/problems/relative-ranks
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let sorted = score.toSorted((a,b) =>  b-a)
    let answer = []
    for (let one of score){
        let place = sorted.indexOf(one) + 1
        if (place == 1){
            answer.push("Gold Medal")
        } else if (place == 2){
            answer.push("Silver Medal")
        } else if (place == 3){
            answer.push("Bronze Medal")
        } else {
            answer.push(""+place)
        }
    }
    return answer
};