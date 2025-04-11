/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let lowN = (""+low).length
    let highN = (""+high).length
    if (highN - lowN <= 0 && lowN % 2 != 0) return 0
    
    const isSymmetric = (num) => {
        num = ""+num
        let n = num.length
        if (n % 2 != 0) return false
        let left = 0
        let right = 0
        for (var i = 0; i < n/2; i++){
            left += parseInt(num[i])
        }
        for (; i < n; i++){
            right += parseInt(num[i])
        }
        return left == right 
    }

    let count = 0
    for (let i = low; i <= high; i++){
        if (isSymmetric(i)){
            count++
        }
    }
    return count
};

//below optimizes for narrow constraints of problem:

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let lowN = (""+low).length
    let highN = (""+high).length
    if (highN - lowN <= 0 && lowN % 2 != 0) return 0
    
    const isSymmetric = (num) => {
        if (num <= 10) return false
        if (num <= 99) return Math.floor(num/10) == num % 10
        if (num <= 1000) return false
        num = ""+num
        return parseInt(num[0]) + parseInt(num[1]) == parseInt(num[2]) + parseInt(num[3])
    }

    let count = 0
    for (let i = low; i <= high; i++){
        if (isSymmetric(i)){
            count++
        }
    }
    return count
};