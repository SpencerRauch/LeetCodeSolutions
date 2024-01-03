//https://leetcode.com/problems/number-of-laser-beams-in-a-bank

/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let beams = 0; //number of beams
    let devCur = 0; //number of devices in current device containing row
    let devLast = 0; //number of devices in last device containing row
    for (let row of bank){
        let devRow = 0; //number of devices found in this row
        for (let entry of row){
            if (entry === '1'){
                devRow++
            }
        }
        if (devRow != 0){ //if devices found
            devLast = devCur; //our current becomes our last
            devCur = devRow; // our row becomes our current
            beams += devCur * devLast //calculate connections between last two device containing rows
        }
    }
    return beams
};