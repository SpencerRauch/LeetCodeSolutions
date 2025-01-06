//https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/
/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const ans = []
    for (let i = 0; i < boxes.length; i++){
        let count = 0;
        for (let j = 0; j < boxes.length; j++){
            if (j == i) continue
            if (boxes[j] == "1"){
                count += Math.abs(i - j)
            }
        }
        ans.push(count)
    }
    return ans
};

// Time Complexity: O(n^2)

var minOperations = function(boxes) {
    const ans = []
    let sum = 0; //track sum of 1s
    let count = 0; //track number of 1s

    //iterate through boxes left to right
    for (let i = 0; i < boxes.length; i++){
        //add sum to ans, this is how many operations it takes to move all seen 1s to this box
        ans.push(sum)
        // if box is 1, increment count of seen 1s
        count += boxes[i] == "1" ? 1 : 0 
        //add one operation for each 1 seen so far
        sum += count 
    }
    //reset sum and count
    sum = 0;
    count = 0;
    //iterate through boxes right to left
    for (let i = boxes.length - 1; i >= 0; i--){
        //add sum to ans, accounting for 1s seen from right to left
        ans[i] += sum
        count += boxes[i] == "1" ? 1 : 0
        sum += count
    }
    return ans
}

// Time Complexity: O(n)