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

createBoard();