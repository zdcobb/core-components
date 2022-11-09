const tests = require("./tester");

/*
INSERTION SORT!

Insertion sort is one of the basic sorting algorithms and has a fairly simple implementation.
The basics: Keeping all the sorted items at the beginning of the array, we iterate through each element 
and then INSERT the element where it belongs in the sorted portion.
Keep doing this until you reach the end of the array, at which point it should be fully sorted.
Another interesting point to insertion sort: It's good at handling added or streamed in data, because it can sort as it goes

Steps:
1. Start at index of 1 (index 0 is technically already sorted and will serve as the start of our sorted portion)
2. Traveling backwards, compare the current item with each item in the sorted portion
3. if a current < sorted item, swap them. Continue traveling backwards and repeat until current > sorted item
4. move on to next index until we reach the end

Time complexity:
Best: O(n)
Average/Worst: O(n^2)

--
[5, 4, 6, 3, 2, 1]
    --
*/

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		const currentVal = arr[i];
		for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			[arr[j], arr[j + 1]] = [currentVal, arr[j]];
		}
	}

	return arr;
}

tests.testRunner(insertionSort);
