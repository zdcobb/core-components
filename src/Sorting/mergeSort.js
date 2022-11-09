const tests = require("./tester");
/*
MERGE SORT!

Merge sort is one of the more advanced sorting algorithms. In turn for being a little more complex to set up and understand, 
it makes up for it with better performance and lower time complexity. 
The basic premise of merge sort is that an array with 0 or 1 elements is already sorted,
so break the given array into the smallest parts then sort it as you put it back together

This procedure can be broken down into two parts, more or less:
1. Splitting the array down into atomic parts
2. Merging two arrays (repeated of course)

Basic Flow:
1. Find a middle point and split the array into two pieces
2. Do this with the subsequent pieces until you are left with a series of arrays with 0 or 1 element
3. Using one pointer for each array, merge the split arrays (step by step) sorting as you go (leveraging the fact that they are already sorted!)

                    -
Arr 1: [ 1, 3, 5, 7]
Arr 2: [ 2, 4, 6, 8]
                  -
New merged array: [1, 2, 3, 4, 5, 6, 7, 8]

Time complexity:
Best: O(n * log(n))
Avg/Worst: O(n * log(n))
*/

function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	// find the middle and split
	let middle = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, middle));
	let right = mergeSort(arr.slice(middle));
	return mergeArrays(left, right);
}

function mergeArrays(arr1, arr2) {
	let results = [];
	let i = 0;
	let j = 0;

	while (i < arr1.length || j < arr2.length) {
		if (arr2[j] === undefined || arr1[i] <= arr2[j]) {
			results.push(arr1[i]);
			i++;
		} else if (arr1[i] === undefined || arr2[j] < arr1[i]) {
			results.push(arr2[j]);
			j++;
		}
	}
	return results;
}

function testMergeArrays(arr1, arr2, expected) {
	let merged = mergeArrays(arr1, arr2);
	if (tests.compareArrays(merged, expected)) {
		console.log("MergeArrays fn successfully merged the two arrays!");
	} else {
		console.log("Oops, this doesnt look right...");
		console.log("Expected: ", expected);
		console.log("Received: ", merged);
	}
}

testMergeArrays([1, 3, 5, 7], [2, 4, 6, 8], [1, 2, 3, 4, 5, 6, 7, 8]);
tests.testRunner(mergeSort);
