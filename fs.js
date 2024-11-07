const fs = require('fs');

// fs.readFile('./demo.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     console.log(data.split('\n'));
// });

// fs.writeFile('./hello.txt', 'Hello World!', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     console.log('File has been written.');
// });

fs.appendFile('./hello.txt', '\nThis is test content.', (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('File has been written.');
});