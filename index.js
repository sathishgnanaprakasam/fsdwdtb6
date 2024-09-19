let currentPlayer = 'X';
let cells = ['', '', '', '', '', '', '', '', ''];

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

function updateStatus() {
    let status = document.querySelector('.status');

    status.textContent = `Next Player: ` + currentPlayer;
}

function checkWinner() {
    // define the winning combination
    const winningCombination = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
    ];

    // iterate through the winning combination
    for (let i = 0; i < winningCombination.length; i++) {
        const [a, b, c] = winningCombination[i];

        // check if the cells have the same value
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            return true;
        }
    }

    return false;
}

const handleClick = (square, index) => {
    // check if the square is already clicked
    if (square.textContent) return;

    if (currentPlayer === 'X') {
        // update the text content of the clicked square element
        square.textContent = 'X';

        cells[index] = 'X';
    } else {
        // update the text content of the clicked square element
        square.textContent = 'O';

        cells[index] = 'O';
    }

    // check if the current player has won
    if (checkWinner()) {
        alert(`Player ${currentPlayer} wins!`);
        return;
    }

    // toggle the player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

    updateStatus();
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

function displayStatus() {
    let container = document.querySelector('.container');

    // create a header element 'h1' with the text content of current player's mark
    let status = document.createElement('h1');

    // set the class name of the element to 'status'
    status.setAttribute('class', 'status');

    status.textContent = `Next Player: ` + currentPlayer;

    container.appendChild(status);
}

displayStatus();
createBoard();
addEventListeners();