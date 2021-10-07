function trianglePattern(a, b) {
    if (a === 0) {
        return;
    }
    let triangle = "";
    for (let index = 0; index < b; index++) {
        if (index < a - 1) {
            triangle += " "
        } else {
            triangle += String.fromCharCode(64 + (b - a + (index - a) + 2))
        }
    }
    console.log(triangle);
    trianglePattern(a - 1, b)
}

trianglePattern(5, 5);