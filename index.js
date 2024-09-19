let currentPlayer = 'X';

function createBoard() {
    // get the reference of the container element
    let container = document.querySelector('.container');

    // create a div element
    let board = document.createElement('div');

    // assign a class attribute with a value of 'board'
    // board.classList.add('board');
    board.setAttribute('class', 'board');

    for (let rows = 1; rows <= 3; rows++) {
        // create a div element
        let row = document.createElement('div');

        // set the class name of the element to 'row'
        row.setAttribute('class', 'row');

        // create 3 div elements
        for (let squares = 1; squares <= 3; squares++) {
            // create a button element
            let square = document.createElement('button');

            // set the class name of the element to 'square'
            square.setAttribute('class', 'square');

            // append the button element to the row element
            row.appendChild(square);
        }

        board.appendChild(row);
    }

    // append the board element to the container element
    container.appendChild(board);
}

const handleClick = (square, index) => {
    // update the text content of the clicked square element
    square.textContent = 'X';
}

function addEventListeners() {
    // get the references to all the square elements
    let squares = document.querySelectorAll('.square');

    // iterate through the elements
    squares.forEach((square, index) => {
        // for each of the element, attach an onClick event listener
        square.addEventListener('click', () => {
            handleClick(square, index);
        });
    });
}

createBoard();
addEventListeners();