/* 
  https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
  Stable sort
  
  Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
  Space: O(1) constant.
  For review, create a function that uses BubbleSort to sort an unsorted array in-place.
  For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8, 38,37, 20 , 21, 35, 48, 98, 1000];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given nums in-place by mutating the array.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given nums after being sorted.
 */
function bubbleSort(nums) {
    let isSorted = false; //assume array isn't sorted to start
    let stop = 0 // this will keep track of how many values we have floated to the end
    while(!isSorted){ // if our array isn't sorted, start bubbling
        isSorted = true // will stay true if we don't do any swaps
        for (let i = 0; i < nums.length-1-stop; i++){ // iterate through the array
            if (nums[i] > nums[i+1]){ // if the next value is smaller than the current value
                isSorted = false; // flag that we are still floating values, and therefore not done sorting
                [nums[i], nums[i+1]] = [nums[i+1], nums[i]] // perform swap
            }
        }
      stop++ // increase stop amount because we floated one value to it's correct position
    }

    return nums
}

console.log(bubbleSort(numsRandomOrder))