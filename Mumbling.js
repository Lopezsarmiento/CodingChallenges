// 18. Mumbling
// Given a string which includes only letters, 
// write a function that produces the outputs below.

const accum = str => {
  // Your solution
  // turn string to arr
  let arr = str.split('')
  const result = arr.map((item, index) => {
    return `${item.toUpperCase()}${item.toLowerCase().repeat(index)}`
  })

  return result.join('-')
};

console.log(accum('abcd')); // 'A-Bb-Ccc-Dddd'
console.log(accum('cwAt')); // 'C-Ww-Aaa-Tttt'
console.log(accum('RqaEzty')); // 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'