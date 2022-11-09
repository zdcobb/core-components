const tests = require("./tester");

/*
SELECTION SORT!

Ways to improve:
1. cut down on number of operations storing the index of the lowest value and only swapping at the very end (1 operation vs potentially N on a reversed array)

Time complexity:
Best: O(n^2)
Average/Worst: O(n^2)
*/
function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[i]) [arr[i], arr[j]] = [arr[j], arr[i]];
		}
	}
	return arr;
}

tests.testRunner(selectionSort);
