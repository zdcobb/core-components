const tests = require("./tester");
/*

BUBBLE SORT!

Bubble sort is considered a "basic sorting" algorithm and is fairly simple to implement. 
It works by traversing through the array multiple times, each pass "bubbling" the largest number to the end.

A naive solution is very straight forward, but there are ways to improve performance and reduce redundant work.
For example, since the largest numbers bubble up to the end, the end our array is the sorted portion.
Since the end portion is already sorted, there's no need to re-traverse it and we can reduce the "ending" point each pass.
We can also add a "swap" variable to track if a swap has been made this pass. 
    if swap is false at the end of the pass, we can safely exit the loop as it's already sorted.

All swaps are done in place, so there's no need for a new array. So the basics are this:
1. Starting point index, which increments each pass 
    (starts at 0/beginning of array)
2. Ending point index which, decrements each pass 
    (starts at array.length - 1, sincewe dont want to compare the last item with undefined)
3. Comparison & Swapping logic for each number. If current number > next number, swap them.
4. At end of loop, decrement ending point


Time Complexity:
Best:       O(1) -- if our array is sorted
Avg/Worst:  O(n^2) -- technically the number of processes per pass is optimized to reduce every time, 
    but the pattern still requires a loop in a loop for N

Space Complexity: O(1) -- all swaps are done in place using the original array
*/

function bubbleSort(arr) {
	let end = arr.length - 1;
	let swap = true;

	while (end > 0 && swap === true) {
		swap = false;
		for (let i = 0; i < end; i++) {
			if (arr[i] > arr[i + 1]) {
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
				swap = true;
			}
		}
		end--;
		if (swap === false) break;
	}

	return arr;
}

tests.testRunner(bubbleSort);

module.exports = {
	bubbleSort,
};
