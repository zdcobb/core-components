/*

PRIORITY QUEUE

A priority queue is a very common concept used in many many different circumstances,
Essentially it's like a queue, but rather than items being process linearly,
items are processed based on the level of their priority (usually lowest -> highest).
The most common implementation is a binary heap, but they are not synonomous.

Parts:
1. Node -- each node is our item in the queue, which has two properties (in this example)
    a. Value -- whatever data is stored in the node
    b. Priority -- the priority value of the node
2. Enqueue -- adding a new item to the end queue, which is "bubbled up" to it's appropriate place
3. Dequeue -- extracting the highest priority item from the queue and a new root is picked
    To pick a new root, swap it with the last item, then bubble that down
4. Bubble up -- If an item has a higher priority than it's parent, it needs to be swapped (recursively)
5. Bubble down -- if an item is swapped to the root, it usually needs bubbled down to it's approriate spot
    If the item value is lower priority than it's left or right child, swap them (recursively)
    If lower priority than BOTH, swap w/ the highest priority child

Time Complexity:
Enqueue: O(log(n))
Dequeue: O(log(n))
Search(?): O(n)

*/

class PriorityQueue {
	constructor() {
		this.nodes = [];
	}
	// add a new item to the queue, requests value to store and priority
	// Could probably set a default to be the lowest priority and bubble it up
	enqueue(val, priority) {
		let node = new Node(val, priority);
		this.nodes.push(node);
		this.bubbleUp();
	}
	// Remove the highest priority (root) item and bubble down
	dequeue() {
		if (this.nodes.length === 0) return;
		// grab root value, then swap
		let root = this.nodes[0];
		this.nodes[0] = this.nodes.pop();

		// if (this.nodes.length === 0) return;
		this.bubbleDown();
		return root;
	}
	bubbleUp() {
		// starting at the last node, we need to find the parents
		// parent index = (current index - 1) / 2 -- floored
		let index = this.nodes.length - 1;
		let parentIndex = Math.floor((index - 1) / 2);

		while (index > 0) {
			if (this.nodes[index].priority > this.nodes[parentIndex].priority) break;
			[this.nodes[index], this.nodes[parentIndex]] = [this.nodes[parentIndex], this.nodes[index]];
			[index, parentIndex] = [parentIndex, Math.floor((index - 1) / 2)];
		}
	}
	bubbleDown() {
		// starting at the root, we need to find the children then swap with the highest priority one (assuming both are higher)
		let index = 0;
		let [left, right] = [1, 2];

		while (index < this.nodes.length - 1) {
			let indexPriority = this.nodes[index].priority;
			let leftPriority = this.nodes[left] ? this.nodes[left].priority : Infinity;
			let rightPriority = this.nodes[right] ? this.nodes[right].priority : Infinity;

			/* 
            cases for left:
            1. index < left && left < right
            2. index < left && right is undefined
            
            cases for right:
            1. index > right (other case covered already)

            break:
            1. index > left and right
            2. left and right don't exist
            */

			if (leftPriority < indexPriority && leftPriority <= rightPriority) {
				[this.nodes[left], this.nodes[index]] = [this.nodes[index], this.nodes[left]];
				index = left;
			} else if (rightPriority < indexPriority) {
				[this.nodes[right], this.nodes[index]] = [this.nodes[index], this.nodes[right]];
				index = right;
			} else {
				break;
			}

			left = 2 * (index + 1);
			right = 2 * (index + 2);
		}
	}
}

class Node {
	constructor(val, priority) {
		this.value = val;
		this.priority = priority;
	}
}

//////////////
// Test Cases
let pque = new PriorityQueue();

let nodes = [
	[5, 5],
	[1, 1],
	[3, 3],
	[4, 4],
	[0, 0],
	[2, 2],
];

nodes.forEach(([val, index]) => {
	// console.log("New item queueing -----------------------------------");
	pque.enqueue(val, index);
	// console.log(pque);
	// console.log("\n");
});

console.log("Heap before extracting...");
console.log(pque);
console.log("\n");

for (let i = 0; i < 3; i++) {
	console.log("Extracting highest priority item ------------------------- ");
	let nextItem = pque.dequeue();
	console.log("\nExtracted node: ", nextItem);
	console.log(pque);
	console.log("\n");
}

module.exports = {
	PriorityQueue,
};
