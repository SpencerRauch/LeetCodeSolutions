/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const romanNumerals = [ 
        { val: 1000, text: 'M' }, 
        { val: 900, text: 'CM' }, 
        { val: 500, text: 'D' }, 
        { val: 400, text: 'CD' }, 
        { val: 100, text: 'C' }, 
        { val: 90, text: 'XC' }, 
        { val: 50, text: 'L' }, 
        { val: 40, text: 'XL' }, 
        { val: 10, text: 'X' }, 
        { val: 9, text: 'IX' }, 
        { val: 5, text: 'V' }, 
        { val: 4, text: 'IV' }, 
        { val: 1, text: 'I' }
    ]
    
    let roman = "";
    
    for( let {val,text} of romanNumerals){
        if (num >= val){
            let count = Math.floor(num / val)
            roman += text.repeat(count)
            num %= val
        }
    }
    return roman
    
};

