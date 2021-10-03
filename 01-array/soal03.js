const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
];

let newArr = []

function searchInArray(arr, num) {
    arr.forEach(element => {
        element.forEach(e => {
            newArr.push(e)
        })
    })
    if (newArr.indexOf(num) == -1) {
        console.log("null")
    } else {
        console.log(newArr.indexOf(num))
    }
}

console.log(searchInArray(arr, 3));
console.log(searchInArray(arr, 2));
console.log(searchInArray(arr, 4));
console.log(searchInArray(arr, 8));