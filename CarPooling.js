var carPooling = function(trips, capacity) {
    debugger;
    trips = trips.sort((a,b)=>(a[1]-b[1]))
    let stop = 0
    let passengers = 0;
    let exit = 0;
    let hopOff = {}
    let lastStop = 0;
    console.log(trips);
    for (let i = 0; i < trips.length; i++){
        stop = trips[i][1]
        for (let j = lastStop+1; j < stop; j++){
            if (hopOff[j]){
                passengers -= hopOff[j]
            }
        }
        if (hopOff[stop] && lastStop != stop){
            passengers -= hopOff[stop]
        }
        passengers += trips[i][0]
        if (passengers > capacity){
            return false;
        }
        exit = trips[i][2];
        if (hopOff[exit]){
            hopOff[exit] += trips[i][0];
        } else hopOff[exit] = trips[i][0];
        lastStop = stop;

    }
    return true;

};
//https://leetcode.com/problems/car-pooling
console.log(carPooling([[3,6,9],[10,2,3],[1,6,8],[2,1,6],[9,3,9]],12))