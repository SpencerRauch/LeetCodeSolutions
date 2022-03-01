/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    let countBits = (a) => 
        {
            var count = 0;
            while (a > 0)
            {
                a &= (a - 1);
                count++;
            }
            return count;
        }
 
    let returnArr = []
    for (let i =0 ; i<=n; i++){
        returnArr.push(countBits(i))
        
    }
    return returnArr
    
}


