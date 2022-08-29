// 17. Descending Order
// Write a function that takes any non-negative integer as an argument 
// and returns it with its digits in descending order. 
// Essentially, rearrange the digits to create the highest possible number.

const descendingOrder = n => {
  // Your solution
  // turn number into string
  let arr = n.toString().split('')
  return Number(arr.sort().reverse().join(''))
};

console.log(descendingOrder(0)); // 0
console.log(descendingOrder(1)); // 1
console.log(descendingOrder(1021)); // 2110
console.log(descendingOrder(42145)); // 54421
console.log(descendingOrder(145263)); // 654321
console.log(descendingOrder(123456789)); // 987654321