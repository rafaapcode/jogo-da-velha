document.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener("click", handleClick);
    })
})

function handleClick(event) {
    console.log(event.target);

    let square = event.target;

    let position = square.id;

    if (handleMove(position)) {

        setTimeout(() => {
            alert("O jogo Acabou !! -  O vencedor foi " + playertime);
        }, 10)

    }
    updatesquare(position);
}

function updatesquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class="${symbol}"></div>`
}

// function updatesquares() {
//     let squares = document.querySelectorAll(".square");

//     squares.forEach((square) => {
//         let position = square.id;
//         let symbol = board[position];

//         if (symbol != "") {
//             square.innerHTML = `<div class="${symbol}"></div>`
//         }
//     })
// }