// You are given an integer N, followed by at least N lines of input (1 <= N <= 100). Each line of input contains one or several words separated with single spaces. Each word is a sequence of letters of English alphabet containing between 1 and 10 characters, inclusive. The total number of words in a line of input is between 1 and 100, inclusive.

// Your task is to process only N lines of input and reverse the order of words in each line of input, while keeping the first and last word in their original position. The lines of your output should not have any trailing or leading spaces.

// Example

// input
// 5
// Hello
// Hello World
// Hello My World
// Hello My Beautiful World
// Twinkle twinkle little star how I wonder what you are

// output
// Hello
// Hello World
// Hello My World
// Hello Beautiful My World
// Twinkle you what wonder I how star little twinkle are

const reverseSentences = (input) => {
  input.shift();

  const result = input.map((element, index) => {
    // transform element into an array
    const elementArray = element.split(" ");
    if (elementArray.length <= 3) {
      return elementArray.join(" ");
    } else {
      // remove first and last element
      const firtEl = elementArray.splice(0, 1);
      const lastEl = elementArray.splice(-1, 1);

      // reverse the array
      elementArray.reverse();

      // Add removed elements to the array
      elementArray.splice(0, 0, firtEl);
      elementArray.splice(elementArray.length, 0, lastEl);

      // return the array as a string
      return elementArray.join(" ");
    }
  });
  return result.join("\n");
};

console.log(
  reverseSentences([
    5,
    "Hello",
    "Hello World",
    "Hello My World",
    "Hello My Beautiful World",
    "Twinkle twinkle little star how I wonder what you are",
  ])
);
