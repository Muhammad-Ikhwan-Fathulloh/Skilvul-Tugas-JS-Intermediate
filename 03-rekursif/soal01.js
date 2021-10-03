const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];

function sumOfArray(arr) {
    let sum = 0
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            sum += sumOfArray(item)
        } else {
            sum += item
        }
    })
    return sum
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));