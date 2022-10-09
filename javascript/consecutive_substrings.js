function consecutiveSubstrings(string) {
  const result = [];
	const arr = string.split("");
	
	for (let i = 0; i < arr.length; i++) {
		(arr.slice(i)).reduce((prev, curr) => {
			result.push(prev + curr);
			return prev + curr
		}, "");
	}
	return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution

/**
 * Iterate through string, letter by letter
 * For each letter, perform a second iteration through array and push each substring to a result array
 */
