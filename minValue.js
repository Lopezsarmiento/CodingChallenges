// find min value

const solution = (arr1, arr2) => {
    const mixarr = [...arr1, ...arr2]
    let value;
    mixarr.forEach((item, index) => {
        if (index === 0) {
            value = item
        } else if (item < value) {
            value = item
        }
    })

    return value
}


console.log(solution([1,2,3], [8,9,7])) // 1
console.log(solution([2,3], [8,9,7])) // 2
console.log(solution([3,6], [8,9,7])) // 3
console.log(solution([13,46], [8,9,7])) // 7