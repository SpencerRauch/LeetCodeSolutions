/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
    const happies = []
    const lastToNext = { 'a':'bc','b':'ac','c':'ab'}
    function genHappies(length, collection, work=""){
        if(work.length == length){
            collection.push(work)
            return
        }
        if (work.length == 0){
            genHappies(length,collection,'a')
            genHappies(length,collection,'b')
            genHappies(length,collection,'c')
            return
        }
        let options = lastToNext[work[work.length-1]]
        genHappies(length, collection, work + options[0])
        genHappies(length, collection, work + options[1])
        return collection
    }
    genHappies(n, happies)
    return happies[k-1] ? happies[k-1] : ""

};

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
    const happies = []
    const lastToNext = { 'a':'bc','b':'ac','c':'ab'} //options alphabetically ordered to ensure lexicographical order
    function genHappies(length, collection, work=""){
        if (collection.length == k) return // end recursion if we have enough happy strings
        if(work.length == length){
            collection.push(work)
            return
        }
        if (work.length == 0){
            genHappies(length,collection,'a')
            genHappies(length,collection,'b')
            genHappies(length,collection,'c')
            return
        }
        let options = lastToNext[work[work.length-1]]
        genHappies(length, collection, work + options[0])
        genHappies(length, collection, work + options[1])
        return collection
    }
    genHappies(n, happies)
    return happies[k-1] ? happies[k-1] : ""

};