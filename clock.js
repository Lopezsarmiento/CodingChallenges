// 3. Clock

// The clock shows h hours (0 <= h <= 23), m minutes (0 <= m <= 59) and s seconds (0 <= s <= 59) after midnight. 
// Your task is to write a function which returns the time since midnight in milliseconds.

const past = (h, m, s) => {
  // Your solution
  // 1s = 1000 miliseconds
  // 1m = 60000 miliseconds
  // 1h = 3600000
  const htomil = h*(3600000)
  const mtomil = m*(60000)
  const stomil = s*(1000)

  return  htomil+mtomil+stomil
};

console.log(past(0, 0, 0)); // 0
console.log(past(0, 1, 1)); // 61000
console.log(past(1, 0, 0)); // 3600000
console.log(past(1, 0, 1)); // 3601000
console.log(past(1, 1, 1)); // 3661000