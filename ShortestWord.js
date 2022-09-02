// 20. Shortest Word
// Given a non-empty string of words, return the length of the shortest word(s).

const findShort = str => {
  // Your solution
  // convert string to array
  const arr = str.split(' ');

  // map array to get length of each word
  const result = arr.map((item) => {
    return item.length
  })

  // sort array of lengths and return first element
  return Math.min(...result)

};

// const findShort = (str) => {
// 	const arr = str.split(' ')
//   return Math.min(...arr.map((word) => word.length));
// };

console.log(findShort("Test where final word shortest see")); // 3
console.log(findShort("Lets all go on holiday somewhere very cold")); // 2
console.log(findShort("i want to travel the world writing code one day")); // 1
