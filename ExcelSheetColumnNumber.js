/**
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function(columnTitle) {
    let num = 0
    for (let i=0; i<columnTitle.length; i++){ // it's just base 26
        num *=26
        num += (columnTitle.charCodeAt(i) -64) // turns A-Z to 1-26
    }
    return num
};

//https://leetcode.com/problems/excel-sheet-column-number