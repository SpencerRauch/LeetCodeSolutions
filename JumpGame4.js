/**
 * @param {number[]} arr
 * @return {number}
 */
 var minJumps = function(arr) {
    let n = arr.length;
    if (n < 2){
        return 0
    }
    if ( n == 2 || arr[0] == arr[n-1]){
        return 1
    } // if first and last are the same we can just jump to last
    
    let map = {}
    
    for ( let i = 0; i < n; i++){
        if (map[arr[i]]){
            map[arr[i]].push(i)
        } else {
            map[arr[i]] = [i]
        }
    }
    let indicesToCheck = [0]
    let jumps = 0
    
    while (indicesToCheck.length > 0){
        let nextToCheck = [];
        let l = indicesToCheck.length
        
        for (let i = 0; i < l ; i++){
            let currentIdx = indicesToCheck[i]
            
            if (currentIdx == n -1) {
                return jumps
            }
            
            let value = arr[currentIdx]
            arr[currentIdx] = undefined // mark as visited
            
            if (currentIdx + 1 <= n-1 && arr[currentIdx + 1]){ // if next index is in range and not visited
                nextToCheck.push(currentIdx + 1) // add to next to check
            }
            
            if (currentIdx - 1 >= 0 && arr[currentIdx -1]){ // if previous index is in range not visited
                nextToCheck.push(currentIdx - 1) // add to next to check
            }
            
            if (map[value]){ //if value is in our map, we need to check jumps to all it's indices
                for (let idx of map[value]){
                    if (arr[idx]){ //checks if index has already been visited
                        nextToCheck.push(idx)
                    }
                }
                delete map[value]
            }
            
        }
        indicesToCheck = nextToCheck
        jumps++
    }
    return jumps
    
};
console.log(minJumps([1,2,2,3,1,5]))

// https://leetcode.com/problems/jump-game-iv
