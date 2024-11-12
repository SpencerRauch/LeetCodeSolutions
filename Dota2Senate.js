/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
    senate = senate.split("")
    while (senate.length) {
        const myTurn = senate.shift()
        const len = senate.length
        for (var i = 0; i < len; i++) {
            if (senate[i] != myTurn) {
                senate.splice(i, 1)
                senate.push(myTurn)
                break
            }
        }
        if (i == len) {
            return myTurn == "R" ? "Radiant" : "Dire"
        }

    }
};

/**
 * @param {string} senate
 * @return {string}
 */

//using indices to score each in the respective queues
var predictPartyVictory = function (senate) {
    let offSet = senate.length
    let radiants = []
    let dires = []
    for (let i = 0; i < offSet; i++) {
        if (senate[i] === "R") {
            radiants.push(i)
        } else {
            dires.push(i)
        }

    }
    while (radiants.length > 0 && dires.length > 0) {
        let r = radiants.shift()
        let d = dires.shift()
        if (d < r) {
            dires.push(d + offSet)
        } else {
            radiants.push(r + offSet)
        }
    }
    return radiants.length > 0 ? "Radiant" : "Dire"


};