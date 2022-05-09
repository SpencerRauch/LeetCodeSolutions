// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//          a
var arr1 = [1, 3, 3, 5, 8, 10,];
//          b
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];

function mergeDedupe(arr1, arr2) {
    let merged = [] //array to return
    let indexOne = 0 // initialize two indices, one for each array
    let indexTwo = 0
    while (indexOne < arr1.length && indexTwo < arr2.length) { //while both indices are within their respective arrays
        let one = arr1[indexOne] //get the values from each arr at their respective indices
        let two = arr2[indexTwo]
        if (one == two) { //if they're equal
            if (merged[merged.length - 1] != one) { //see if the item exists already in our array (should be last item since we're using sorted arrs)
                merged.push(one) //if it doesn't, push this value
            }
            indexOne++ //regardless, move both indices forward
            indexTwo++
        } else if (one < two) { // if one is smaller, only check and potentially push one
            if (merged[merged.length - 1] !== one) {
                merged.push(one)
            }
            indexOne++ //regarless, move index one up
        } else if (merged[merged.length - 1] !== two) { // else if two smaller, check for dupes then push
            merged.push(two)
            indexTwo++
        } else {
            indexTwo++ //increase indexTwo if it the value didn't get pushed
        }
    }
    while (indexOne < arr1.length){  //collect the rest of arr 1 if arr 2 ran out
        let one = arr1[indexOne]
        if (merged[merged.length - 1] != one) { // still checking for dupes
            merged.push(one)
        }
        indexOne++

    }

    while (indexTwo < arr2.length){ // collect the rest of arr 2 if arr 1 ran out
        let two = arr2[indexTwo]
        if (merged[merged.length - 1] != two) { // still checking for dupes
            merged.push(two)
        }
        indexTwo++

    }
    return merged

}

// try out some other tests
console.log(mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5])) //expected: [ 1, 3, 4, 5, 8, 10 ]
console.log(mergeDedupe([2, 3, 3, 5, 8, 10, 12], [1, 3, 4, 6])) //expected: [1, 2, 3, 4, 5, 6, 8, 10, 12]

// //   a ->
//     [1, 3, 3, 5, 8, 10]
// //   b
//     [1, 3, 4, 5]

