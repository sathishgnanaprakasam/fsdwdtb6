const statusUpdate = () => {
    console.log('Status: Completed!');
}

const A = () => {
    // call the function B
    // pass `statusUpdate` function as an argument
    B(statusUpdate);
}

// function B should receive a callback fn as an argument
// and execute it whenever needed.!
const B = (callback) => {
    // Generate a random number
    const randomNumber = Math.random() * 10;

    // print the random number
    console.log('Random Number: ', randomNumber);

    // call the callback function
    callback();
}

// Call function A
A();