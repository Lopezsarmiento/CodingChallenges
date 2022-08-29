// 16. Highest and Lowest
// Given a string of space-separated numbers, write a function that returns the highest and lowest numbers. 
// There will always be at least one number in the input string.

const highAndLow = numbers => {
  // Your solution here
  // turn the string into an array
  let arr = numbers.split(' ');
  // return `${arr[arr.length - 1]} ${arr[0]}`;
  return `${Math.max(...arr)} ${Math.min(...arr)}`;

};

console.log(highAndLow('1 2 3 4 5')); // '5 1'
console.log(highAndLow('1 2 -3 4 5')); // '5 -3'
console.log(highAndLow('1 9 3 4 -5')); // '9 -5'
console.log(highAndLow('0 -214 542')); // '542 -214'