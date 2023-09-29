let count = 0;

function add() {
    let count = 0; //variável de escopo local tem preferencia sobre a global
    count++;
}

add();
add();

console.log(count);

/*******************************************************************************
Quando usar uma função dentro da outra, é melhor usar uma arrow function, por organização.
********************************************************************************/

/*
function addSquares(a, b) {
    function square(x) {
        return x * x;
    }

    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}

console.log(addSquares(2, 3));
*/

function addSquares(a, b) {
    const square = (x) => x * x;

    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}

console.log(addSquares(2, 3));