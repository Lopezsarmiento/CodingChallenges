// Sort an array of numbers

const ascSort = (arr) => {
	// iterate array
  for (let i = 0; i < arr.length; i++) {
		// iterate array again for comparison	
    for (let j = i + 1; j < arr.length; j++) {
			// if i item is greater than j item, swap them
      if (arr[i] > arr[j]) {
				// create temp variable to store i item
				let temp = arr[i];
				// swap i item with j item
        arr[i] = arr[j];
				// swap j item with temp variable
        arr[j] = temp;
      }
    }
  }

	return arr
};

const descSort = (arr) => {
	// iterate array
  for (let i = 0; i < arr.length; i++) {
		// iterate array again for comparison	
    for (let j = i + 1; j < arr.length; j++) {
			// if i item is greater than j item, swap them
      if (arr[i] < arr[j]) {
				// create temp variable to store i item
				let temp = arr[i];
				// swap i item with j item
        arr[i] = arr[j];
				// swap j item with temp variable
        arr[j] = temp;
      }
    }
  }

	return arr
};


console.log(ascSort([5, 3, 2, 4, 1]));
console.log(ascSort([5, 3, 2, 4, 1, 6, 9, 8, 7, 8]));
console.log(descSort([5, 3, 2, 4, 1]));
console.log(descSort([5, 3, 2, 4, 1, 6, 9, 8, 7, 8]));
