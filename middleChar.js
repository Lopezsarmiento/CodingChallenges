const getMiddle = str => {
    // Your solution
    const midIndex = str.length / 2
    return (str.length % 2 !== 0)? str[Math.floor(midIndex)] : str[Math.floor(midIndex) - 1]+str[Math.floor(midIndex)]
}
  
console.log(getMiddle('test')); // 'es'
console.log(getMiddle('testing')); // 't'
console.log(getMiddle('middle')); // 'dd'
console.log(getMiddle('A')); // 'A'
console.log(getMiddle('parangaricutirimicuaro'))