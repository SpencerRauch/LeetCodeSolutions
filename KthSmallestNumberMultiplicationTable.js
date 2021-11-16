const findKthNumber = (m, n, k) => {
    let low = 1, high = m * n
    while (low < high) {
        let mid = low + Math.floor((high - low) / 2)
        if (!isEnough(mid, m, n, k)) {
            low = mid +1
        } else {
            high = mid
        }
    }
    return low
}

const isEnough = (x, m, n, k) => {
    let count = 0
    for (let i = 1; i <= m; i++) {
        count += Math.min(Math.floor(x / i), n)
    }
    return count >= k
}

//https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/