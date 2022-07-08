/* 
Given an array of non-unique items (i.e., [1, 1, 2, 3, 4, 4, 2, 2,] or [95, 96, 97, 99, 96, 97]) and 
a given number of items that must be removed from the array, determine the fewest number of unique items
 you can have in the array after the removal.

*/
list = [1,1,2,3]

function maxUniqueLeft(items, removals){
    let freq = {}
    for (let item of items){
        freq[item] ? freq[item]++ : freq[item] = 1;
    }
    uniques = Object.keys(freq).length
    vals = Object.values(freq).sort((a,b)=>(a-b))
    let i = 0;
    while(removals>0 && i < vals.length){
        if (vals[i] <= removals){ 
            removals -= vals[i]
            i++
            uniques--
        } else return uniques
    }
    return uniques

}

console.log(maxUniqueLeft(list, 2))