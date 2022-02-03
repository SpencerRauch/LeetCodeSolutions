function binarySearch(
  sortedNums,
  searchNum,
  leftIdx = 0,
  rightIdx = sortedNums.length - 1
) {
  if (leftIdx > rightIdx) {
    return false;
  }

  const midIdx = Math.floor((rightIdx + leftIdx) / 2);

  if (sortedNums[midIdx] === searchNum) {
    return true;
  }

  if (searchNum < sortedNums[midIdx]) {
    return binarySearch(sortedNums, searchNum, 0, midIdx - 1);
  } else {
    return binarySearch(sortedNums, searchNum, midIdx + 1, rightIdx);
  }
}
