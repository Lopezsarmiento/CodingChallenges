// 22. Exes and Ohs
// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive.
// The input string can contain any character.

const XO = (str) => {
  // Your solution
  let counterx = 0;
  let countero = 0;

  for (let i = 0; i < str.length; i++) {
		if (str[i] === "x" || str[i] === "X") {
			counterx++;
		} else if (str[i] === "o" || str[i] === "O") {
			countero++;
		}
	}

	if (counterx === 0 && countero === 0) {
		return true;
	} else if (counterx === countero) {
		return true;
	} else {
		return false;
	}

};

console.log(XO("xo")); // true
console.log(XO("Oo")); // false
console.log(XO("xxOo")); // true
console.log(XO("xxxm")); // false
console.log(XO("ooom")); // false
console.log(XO("ty")); // true (when no 'x' and 'o' is present should return true)
