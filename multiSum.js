//given an array of size N, check if possible to generate a sum that equals to the target using the elements of the array

function multiSum(N,nArr, S) {
    if (nArr.length == 0) return "NO"
    let total = nArr.reduce((a, b) => a + b);
    if (total === S) return "YES";
    for (let i = 0; i < nArr.length; i++) {
        if (total - nArr[i] === S) return "YES";
        if (multiSum(N-1,nArr.slice(0, i).concat(nArr.slice(i + 1)), S) == "YES") return "YES";
    }
    return "NO";
}


console.log(multiSum(5,[3, 2, 0, 7, -1], 8))
console.log(multiSum(3,[-1, 3, 3,], 4))
console.log(multiSum(3,[4, -5, 1], 5))



