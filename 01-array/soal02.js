const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];
let sum = 0
let avg = 0
let num = 0

function getAverage(input) {
    for (let i = 0; i < input.length - 1; i++) {
        sum += input[i]
    }
    avg = sum / input.length
    num = Math.round(avg)
    for (let i = 0; i < input.length - 1; i++) {
        if (input[i] > num) {
            console.log(input[i])
        }
    }
}

console.log(getAverage(arr1))
console.log(getAverage(arr2))