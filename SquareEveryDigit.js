// 14. Square Every Digit
// Given an integer, your task is to square every digit of it and concatenate them to produce a new integer.

const squareDigits = (num) => {
  // Your solution
	return Number(num.toString().split('').map(num => num * num).join(''))
};

console.log(squareDigits(2112)); // 4114
console.log(squareDigits(3212)); // 9414
console.log(squareDigits(9159)); // 8112581


const persons = [
	{
		first: "jane",
		last: "doe",
	},
	{
		first: "will",
		last: "smith",
	},
	{
		first: "albert",
		last: "doe",
	},
	{
		first: "peter",
		last: "smith",
	},
]

const transform = persons.reduce((acc, current) => {

	if (acc[current.last]) {
		acc[current.last].push(current)
	} else {
		acc[current.last] = [current]
	}

	return acc
}, {})

console.log(transform)
