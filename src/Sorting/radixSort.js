const tests = require("./tester");
/*
RADIX SORT!

This sorting algorithm is much different than the other ones because it doesn't use comparisons to sort.
Instead, Radix Sort takes advantage of the individual digits and length of digits in a number, 
depending on the "Radix" or base of the number system--base 10 being the most common for us humans
Start by creating a bucket for each digit in our base system (e.g. 0 - 9), and sort the number into the buckets
by the number in the current digit place, starting from the 0th place (right side), 
then pull them back into the array in the new order.
Do this K number of times, where K == # of digits in the largest number. (e.g. 0th = 1, 10th = 2, 100th = 3, 1000th = 4, etc)

Caveats: Can ONLY be used on whole integer arrays

We can break it down into smaller parts:
1. Find number's Kth Digit -- (Can be easily done with number.length - K?)
2. Sorting -- putting the numbers into their buckets
3. Reassembling -- reassembling the numbers from the buckets
4. Knowing when to stop -- When we've hit the last digit of the largest number(s)

Time Complexity:
Best: O(n+k)
Avg/Worst: O(n+k)
*/

// Main execution
function radixSort(arr) {
	if (arr.length <= 1) return arr;
	let results = arr.map((item) => item);
	let maxLength = Math.max(...results.map((number) => countDigits(number)));

	// For loop to pass through the array K amount of times
	for (let k = 0; k < maxLength; k++) {
		let buckets = [[], [], [], [], [], [], [], [], [], []];

		// another for loop to visit each item in array
		for (let i = 0; i < results.length; i++) {
			// each pass sorts all numbers into buckets based on the current Kth digit
			let kthDigit = getDigit(results[i], k);
			buckets[kthDigit].push(results[i]);
		}
		// now that we've sorted into buckets, we need to return them to a single array
		results = [].concat(...buckets);
	}
	return results;
}

// HELPERS
function getDigit(number = 0, digit) {
	let numString = String(number);
	if (numString.length - 1 < digit) {
		return 0;
	} else {
		let numberAtDigit = numString.charAt(numString.length - 1 - digit);
		return Number(numberAtDigit);
	}
}

function countDigits(number) {
	if (number === undefined) return 0;
	else return Number(String(number).length);
}

//////////////////
// getDigit tests

let digit1 = getDigit(1234, 0);
// console.log("0th digit of 1234 should be 4, received: ", digit1);
console.assert(digit1 === 4);

let digit2 = getDigit(23456789, 7);
// console.log("7th digit of 23456789 should be 2, received: ", digit2);
console.assert(digit2 === 2);

let digit3 = getDigit(123, 4);
// console.log("4th digit of 123 should be 0, received: ", digit3);
console.assert(digit3 === 0);

let digit4 = getDigit(1, 0);
// console.log("0th digit of 1 should be 1, received: ", digit4);
console.assert(digit4 === 1);

/////////////////////
// coundDigits tests

let count1 = countDigits(12345);
// console.log("Digit count of 12345 should be 5, received: ", count1);
console.assert(count1 === 5);

let count2 = countDigits();
// console.log("Digit count of _ should be 0, received: ", count2);
console.assert(count2 === 0);

let count3 = countDigits(0);
// console.log("Digit count of 0 should be 1, received: ", count3);
console.assert(count3 === 1);

//////////////////////
// main function test
tests.testRunner(radixSort);

module.exports = {
	radixSort,
	getDigit,
	countDigits,
};
