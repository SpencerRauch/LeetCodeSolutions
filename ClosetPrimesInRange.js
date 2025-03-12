/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {
    const primes = Array(right+1).fill(true)
    let upper = Math.sqrt(right)
    for (let i = 2; i <= upper; i++){
        if (primes[i]){
            for (let j = i * i; j <=right; j += i){
                primes[j] = false;
            }
        }
    }
    const band = []
    if (left < 2) left = 2
    for (let i = left; i <= right; i++){
        if (primes[i]){
            band.push(i)
        }
    }
    if (band.length < 2) return [-1,-1]
    let dif = band[1]-band[0]
    let min = [band[0],band[1]]
    for (let i = 2; i < band.length; i++){
        let newDif = band[i] - band[i - 1]
        if (newDif < dif){
            dif = newDif
            min[0] = band[i-1]
            min[1] = band[i]
        }
    }
    return min
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {
    const primes = Array(right+1).fill(true)
    let upper = Math.sqrt(right)
    for (let i = 2; i <= upper; i++){
        if (primes[i]){
            for (let j = i * i; j <=right; j += i){
                primes[j] = false;
            }
        }
    }
    if (left < 2) left = 2
    let min = [-1,-1]
    let band = []
    for (let i = left; i <= right; i++){
        if (primes[i]){
            band.push(i)
            let n = band.length
            if (n >= 2){
                if (min[0] == -1 || (band[n-1] - band[n-2] < min[1] - min[0])){
                    min[0] = band[n-2]
                    min[1] = band[n-1]
                } 
            }

        }
    }
    return min
}
