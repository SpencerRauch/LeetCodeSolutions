/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
 var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let count = 0;
    let map = {}
    for (let one of nums1 ){             // create frequency table of all sums between nums1 and nums2
        for (let two of nums2){
            let sum = one + two
            if (!map[sum]){
                map[sum] = 1
            } else map[sum]++
            
        }
    }
    
    for (let three of nums3){        // for each sum between nums3 and nums4
        for (let four of nums4){
            let sum = three + four
            if (map[-sum]){            // if the opposite sum exists in our freq table
                count += map[-sum]   // we could make as many tuples as exist in that freq table with this sum
            }
            
        }
    }
    return count
    
};

//https://leetcode.com/problems/4sum-ii/