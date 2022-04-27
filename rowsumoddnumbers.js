function rowSumOddNumbers(n) {
    let skips = 0
    let sum = 0
    let working_n = n - 1
    while (working_n >= 1) {
        skips += working_n
        working_n--
    }
    let first_num = (skips * 2) + 1
    sum = first_num
    for (let i = 1; i < n; i++) {
        first_num += 2;
        sum += first_num
    }
    return sum

}