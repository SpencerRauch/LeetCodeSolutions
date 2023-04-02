//https://leetcode.com/problems/successful-pairs-of-spells-and-potions/description/ 

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    potions.sort( (a,b) => b-a)
    let pairs = []
    let spellMap = {}
    for (let spell of spells){
        if (!spellMap.hasOwnProperty(spell)){
            spellMap.spell = getCount(spell)
        }
        pairs.push(spellMap.spell)
    }

    function getCount(spell){
        let threshold = success / spell;
        let left = 0;
        let count = 0;
        let right = potions.length-1;
        while(left <= right){
            let mid = Math.floor((left+right)/2)
            if (potions[mid] < threshold){
                right = mid -1;
            } else {
                left = mid + 1;
                count = mid + 1;
            }
        }
        return count

    }
    return pairs

};