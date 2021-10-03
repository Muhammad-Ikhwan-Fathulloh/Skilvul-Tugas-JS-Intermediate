let i = 1
let j = 1

function trianglePattern(num1, num2) {
    var s = 'a';
    while (s != 'z') {
        alert("ini huruf " + s);
        s = String.fromCharCode(s.charCodeAt(0) + 1);

    }
}

trianglePattern(5, 5);