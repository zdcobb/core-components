/*

The Water Jug Riddle
This is an interesting, yet relatively straight-forward problem you might recognize from the movie Die Hard 3.
In this problem, you're given a 3 gallon jug, a 5 gallon jug and an unlimited amount of water.
The goal, is to get 4 gallons of water in one of the jugs. How?

The solution can be found in multiple ways!
Approach #1 (this is solution I came up with in the interview):
1. Fill the small jug                                               --  Small: 3    Big: 0
2. Transfer the small jug -> big jug                                --  Small: 0    Big: 3
3. Fill the small jug                                               --  Small: 3    Big: 3
4. Transfer the small jug -> big jug                                --  Small: 1    Big: 5
    (In this case only 2 gal and you should have 1 gal left over)
5. Empty the big jug                                                --  Small: 1    Big: 0
6. Transfer the small jug -> big jug                                --  Small: 0    Big: 1
7. Fill the small jug                                               --  Small: 3    Big: 1
8: Transfer the small jug -> big jug                                --  Small: 0    Big: 4

Approach #2 (uses the big jug instead of the small one and can be done with 2 fewer steps):
1. Fill the big jug                         -- Small: 0     Big: 5
2. Transfer the big jug -> small jug        -- Small: 3     Big: 2
3. Empty the small jug                      -- Small: 0     Big: 2
4. Transfer the big jug -> small jug        -- Small: 2     Big: 0
5. Fill the big jug                         -- Small: 2     Big: 5
6. Transfer the big jug -> small jug        -- Small: 3     Big: 4

In both cases you use the size difference of the jugs to calculate out 3 gallons. 
Can you spot the pattern? Let's explore another example...
Now, given a 5 gallon jug and a 7 gallon jug, we want to end up with 3 gallons. How?

Approach #1:
1. Fill the small jug                   -- Small: 5     Big: 0
2. Transfer the small jug -> big jug    -- Small: 0     Big: 5
3. Fill the small jug                   -- Small: 5     Big: 5
4. Transfer the small jug -> big jug    -- Small: 3     Big: 7

Approach #2:
1. Fill the big jug                     -- Small: 0     Big: 7
2. Transfer the big jug -> small jug    -- Small: 5     Big: 2
3. Empty the small jug                  -- Small: 0     Big: 2
4. Transfer the big jug -> small jug    -- Small: 2     Big: 0
5. Fill the big jug                     -- Small: 2     Big: 7
6. Transfer the big jug -> small jug    -- Small: 5     Big: 4
7. Empty the small jug                  -- Small: 0     Big: 4
8. Transfer the big jug -> small jug    -- Small: 4     Big: 0
9. Fill the big jug                     -- Small: 4     Big: 7
10. Transfer the big jug -> small jug   -- Small: 5     Big: 6
11. Empty the small jug                 -- Small: 0     Big: 6
12. Transfer the big jug -> small jug   -- Small: 5     Big: 1
13. Empty the small jug                 -- Small: 0     Big: 1
14. Transfer the big jug -> small jug   -- Small: 1     Big: 0
15. Fill the big jug                    -- Small: 1     Big: 7
16. Transfer the big jug -> small jug   -- Small: 5     Big: 3

Both approaches can be used to find a solution but this time the 1st approach was significantly quicker
while the 2nd approach was 4x slower.
Are you seeing the pattern in both approaches yet?
Fill, transfer, empty, transfer, fill, transfer, empty, transfer...
After each transfer we should check for a solution.

Now for safe measure, let's try one more problem...
Given a 7 gallon jug and a 11 gallon jug, how do you end up with 4 gallons?

Approach #1 (using the small jug):
1. Fill the small jug                   -- Small: 7     Big: 0
2. Transfer the small jug -> big jug    -- Small: 0     Big: 7
3. Fill the small jug                   -- Small: 7     Big: 7
4. Transfer the small jug -> big jug    -- Small: 3     Big: 11
5. Empty the big jug                    -- Small: 3     Big: 0
6. Transfer the small jug -> big jug    -- Small: 0     Big: 3
7. Fill the small jug                   -- Small: 7     Big: 3
8. Transfer the small jug -> big jug    -- Small: 0     Big: 10
9. Fill the small jug                   -- Small: 7     Big: 10
10. Transfer the small jug -> big jug   -- Small: 6     Big: 11
11. Empty the big jug                   -- Small: 6     Big: 0
12. Transfer the small jug -> big jug   -- Small: 0     Big: 6
13. Fill the small jug                  -- Small: 7     Big: 6
14. Transfer the small jug -> jug       -- Small: 2     Big: 11
15. Empty the big jug                   -- Small: 2     Big: 0
16. Transfer the small jug -> jug       -- Small: 0     Big: 2
17. Fill the small jug                  -- Small: 7     Big: 2
18. Transfer the small -> big           -- Small: 0     Big: 9
19. Fill the small jug                  -- Small: 7     Big: 9
20. Transfer the small -> big           -- Small: 5     Big: 11
... 

this goes on for a while, but I don't think you never actually get to a solution. 
let's look at approach #2 again...

Approach #2 (using the big jug):
1. Fill the big jug                 -- Small: 0     Big: 11
2. Transfer big jug -> small jug    -- Small: 7     Big: 4

If you look at quickest solutions for problems 2 and 3, you can see there's a very interesting correlation.
What if we always compare the current volume (and/or max capacity) of one jug to the AVAILABLE capacity of the other jug?
Is the difference == our target?

Approach #1:
1. Fill the small jug                   -- Small: 5     Big: 0
2. Transfer the small jug -> big jug    -- Small: 0     Big: 5
3. Fill the small jug                   -- Small: 5     Big: 5
4. Transfer the small jug -> big jug    -- Small: 3     Big: 7

    - Available capacity of the big jug == 2
    - small jug volume == 5
    --- small's volume - big's available capacity === target  -->  (i.e. 5 - 2 == 3 )

    If we can apply this check to both approaches, maybe it can help save some steps.

Comparison #2, pretty much the reverse of the other but this one can be solved after one step, filling the jug:
    - Available capacity of the small jug == 7
    - big jug volume == 11
    --- big's volume - small's capacity === target -->  (i.e. 11 - 7 === 4)

    This seems pretty obvious because the next step does this, but what if we apply BOTH CHECKS to both approaches?
    Does it help one more than the other? Let's find out.

*/

function solution2(smallCap, bigCap, target) {
	// state variables
	let small = 0;
	let big = 0;
	let steps = 0; // in case we want to count how many steps it took to get to our solution

	function transfer() {
		// figure out how much to transfer, two cases:
		// if volume of big > small's available capacity --> big = big - available, small = smallCap
		// else, big < small's available capacity --> big = 0, small = small + big
		let available = smallCap - small;
		if (big > available) {
			[small, big] = [smallCap, big - available];
		} else {
			[small, big] = [small + big, 0];
		}
	}

	function specialChecks() {
		// some extra comparisons to save time
		// small's volume - big's available capacity === target  -->  (i.e. 5 - 2 == 3 )
		if (small - (bigCap - big) === target) {
			console.log("Shortcut #1 found!");
			small = small - (bigCap - big);
			big = bigCap;
			steps++;
			return true;
		}
		// big's volume - small's available capacity === target -->  (i.e. 11 - 7 === 4)
		if (big - (smallCap - small) === target) {
			console.log("Shortcut #2 found!");
			big = big - (smallCap - small) === target;
			small = smallCap;
			steps++;
			return true;
		}
	}

	while (small !== target && big !== target && steps < 10000) {
		if (big === 0) {
			steps++;
			big = bigCap;
			console.log(`Step ${steps}: Filling the big jug.                ... Small == ${small}, Big == ${big}`);
		} else if (small === smallCap) {
			steps++;
			small = 0;
			console.log(`Step ${steps}: Emptying the small jug.             ... Small == ${small}, Big == ${big}`);
		}

		if (specialChecks() === true) break;

		steps++;
		transfer();
		console.log(`Step ${steps}: Transfering big jug to little jug.  ... Small == ${small}, Big == ${big}`);

		if (specialChecks() === true) break;
	}

	console.log(`Target achieved in ${steps} steps!`);
	return steps;
}

let solutionCount = solution2(7, 11, 3);
console.log("Solution2 count: ", solutionCount);
