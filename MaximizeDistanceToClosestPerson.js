/**
 * @param {number[]} seats
 * @return {number}
 */
 var maxDistToClosest = function(seats) {
    
    
    let firstPerson = 0;
    while (seats[firstPerson] !== 1){
        firstPerson++ // find the first person in a seat
    }
    
    let maxDistance = firstPerson // we can do this because the index of the first person
                                 // is equal to distance from the start 
    let currentDistance = 0;
    for (let i = firstPerson+1; i < seats.length; i++){ //starting after the first person we see,
        if (seats[i] == 0 ) { // if the current seat is empty
            currentDistance++ // keep track of how many empty seats are in this span
            if (i == seats.length -1){ // if we reach the end of the seats on an empty seat, 
                maxDistance = Math.max(maxDistance, currentDistance) // check if sitting there would give largest gap
            }

        } else { // once we find another person, the best seat for this span
            let bestGap = Math.ceil(currentDistance/2) // is in the middle 
            maxDistance = Math.max(maxDistance,bestGap) // see if it's the best overall
            currentDistance = 0  // reset distance from last seen person
        }
        
    }
    
    return maxDistance;
}

//https://leetcode.com/problems/maximize-distance-to-closest-person/