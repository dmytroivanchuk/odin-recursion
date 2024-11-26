const mergeSort = (array) => {
  // Base case: arrays with 0 or 1 element are already sorted
  if (array.length <= 1) {
    return array;
  }

  // Split the array into two halves
  const middleIndex = Math.floor(array.length / 2);
  const leftSide = mergeSort(array.slice(0, middleIndex));
  const rightSide = mergeSort(array.slice(middleIndex));

  // Merge the two sorted halves
  const merged = [];
  let i = 0; // Pointer for left array
  let j = 0; // Pointer for right array

  // Compare elements and merge
  while (i < leftSide.length && j < rightSide.length) {
    if (leftSide[i] < rightSide[j]) {
      merged.push(leftSide[i]);
      i += 1;
    } else {
      merged.push(rightSide[j]);
      j += 1;
    }
  }

  // Add any remaining elements
  return merged.concat(leftSide.slice(i)).concat(rightSide.slice(j));
};

// Test the function
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
