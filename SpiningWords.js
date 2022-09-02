// 19. Stop gninnipS My sdroW!
// Write a function that takes in a string of one or more words,
// and returns the same string, but with all five or more letter words reversed.
// Strings passed in will consist of only letters and spaces.

const spinWords = str => {
  // Your solution
  const arr = str.split(' ');
  const newArr = arr.map(word => {
    if (word.length >= 5) {
        return word.split('').reverse().join('');
    } else {
        return word;
    }
  })

  return newArr.join(' ')
};

console.log(spinWords('This is a test')); // 'This is a test'
console.log(spinWords('Hey fellow warriors')); // 'Hey wollef sroirraw'
console.log(spinWords('This is another test')); // 'This is rehtona test'