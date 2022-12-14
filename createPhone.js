// 13. Create Phone Number
// Write a function that accepts an array of 10 integers (between 0 and 9),
//  and returns a string of those numbers in the form of a phone number.

const createPhoneNumber = (numbers) => {
  // Your solution
  const elementArr = [
    {
      value: "(",
      position: 0,
    },
    {
      value: ")",
      position: 4,
    },
    {
      value: " ",
      position: 5,
    },
    {
      value: "-",
      position: 9,
    },
  ];

  elementArr.forEach((element) => {
    insertIntoArray(numbers, element.position, element.value);
  });

  return numbers.join().replace(/,/g, "");
};

// insert element into an array at a specific index
const insertIntoArray = (arr, index, element) => {
  // Your solution
  arr.splice(index, 0, element);
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // '(123) 456-7890'
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // '(111) 111-1111'
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // '(123) 456-7890'
