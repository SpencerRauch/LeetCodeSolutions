/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
 var intervalIntersection = function(firstList, secondList) {
    
    let i = 0;
    let j = 0;
    let returnArr = [];
    
    while ( i < firstList.length && j < secondList.length){
        let secondStart = Math.max(firstList[i][0], secondList[j][0])
        let firstEnd = Math.min(firstList[i][1], secondList[j][1])
        
        if (secondStart <= firstEnd){
            returnArr.push([secondStart, firstEnd])
        }
        firstList[i][1] < secondList[j][1] ? i++ : j++;
    }
    
    return returnArr;
    
    
};

//https://leetcode.com/problems/interval-list-intersections/