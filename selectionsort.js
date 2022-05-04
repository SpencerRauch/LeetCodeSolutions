/* 
  https://visualgo.net/en/sorting
    
  Selection sort works by iterating through the list, finding the minimum
  value, and moving it to the beginning of the list. Then, ignoring the first
  position, which is now sorted, iterate through the list again to find the
  next minimum value and move it to index 1. This continues until all values
  are sorted.
  Unstable sort.
  
  Time Complexity
    - Best: O(n^2) quadratic.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic.
  Space: O(1) constant.
  Selection sort is one of the slower sorts.
  - ideal for: pagination, where page 1 displays 10 records for example,
      you run selection sort for 10 iterations only to display the first 10
      sorted items.
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts given array in-place.
 * Best: O(n^2) quadratic.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */
function selectionSort(nums) {
    let sorted = 0; //keeps track of how many items have been selected and moved to front
    let mindex = 0 //keeps track of index of minimum value for portion of array we are searching/sorting
    while(sorted < nums.length -1 ){ //while the whole list isn't yet sorted, stop at 1 less because last element implicitly sorted
        for (let i=sorted+1; i < nums.length; i++){  //iterate through the array, starting at the first unsorted index
            mindex = nums[i] < nums[mindex] ? i : mindex; //if the value at the current index is lower than our current minimum index, update mindex
        }
        if (nums[sorted] != nums[mindex]){ //if the values are the same, no need to swap
            [nums[sorted], nums[mindex]] = [nums[mindex], nums[sorted]] //perform swap of min value to front of array (next unsorted position)
        }
        sorted++ // we've sorted one, increase sorted count
        mindex = sorted //initialze minimum index to the first value in the rest of the array to be sorted

    }
    return nums

}
console.log(selectionSort(numsOrdered))
console.log(selectionSort(numsRandomOrder))
console.log(selectionSort(numsReversed))
