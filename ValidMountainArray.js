/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var validMountainArray = function(arr) {
    if (arr.length < 3){
        return false;
    }
    let rising = true;
    let rose = false;
    for (let i = 0; i < arr.length -1; i++){
        if (rising){ // if we're still on the way up
            if (arr[i] > arr[i+1]){ //if the next number is lower than current number,
                rising = false; // we're no longer rising
            } else if (arr[i] == arr[i+1]){ // else if they're equal, not strictly rising, return false
                return false 
            } else if (!rose) rose = true // else the next is lower, we have a valid rise, flag that we rose if we haven't already
        } else { // if we are no longer rising
            if (arr[i] <= arr[i+1]){ //assert all following numbers are lower
                return false;
            }
        }
        
    }
    if (rose){ // if we had a rise
        return rising ? false : true; // are we still rising? If yes, invalid mountain, if no, valid mountain
    } else return false; // if we never rose, invalid mountain
    
};

//https://leetcode.com/problems/valid-mountain-array
