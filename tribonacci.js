var tribonacci = function(n, memo={ 0:0, 1:1, 2:1}) {
    if (!memo.hasOwnProperty(n)){
        let new_entry = memo.hasOwnProperty(n-1) ? memo[n-1] : tribonacci(n-1);
        new_entry += memo.hasOwnProperty(n-2) ? memo[n-2] : tribonacci(n-2);
        new_entry += memo.hasOwnProperty(n-3) ? memo[n-3] : tribonacci(n-3);
        memo[n] = new_entry
    }
    return memo[n]
};

console.log(tribonacci(33))
// attempt one, times out, too slow

var tribonacci = function(n){
    if (n == 0) return 0
    if (n < 3) return 1
    let current = 1;
    let last = 1;
    let two_back = 0;
    let new_current;
    for (let i = 3; i <= n; i++){
        new_current = current + last + two_back;
        two_back = last;
        last = current;
        current = new_current
    }
    return new_current
}

console.log(tribonacci(33))

//iterative, much faster