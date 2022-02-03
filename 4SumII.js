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
            let sum12 = one + two
            if (!map[sum12]){
                map[sum12] = 1
            } else map[sum12]++
            
        }
    }
    
    for (let three of nums3){        // for each sum between nums3 and nums4
        for (let four of nums4){
            let sum34 = three + four
            if (map[-sum34]){            // if the opposite sum exists in our freq table
                                      // (i.e: the value that would make all four sum to zero)
                count += map[-sum34]   // add the frequency of the opposite sum to our count, we can make this many tuples summing to 0 off this sum34
            }
            
        }
    }
    return count
    
};

//https://leetcode.com/problems/4sum-ii/