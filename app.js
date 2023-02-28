const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const stringpar = "Soy Par!"
    const stringimpar = "Soy Impar!"
    var i = 1,
        max = 50;
    res.setHeader('Content-Type', 'text/html');
    for (; i <= max; i++) {
        let response = i % 2 ? stringimpar : stringpar
        res.write(`<p> ${i} ${response}</p>`);
    }
    res.end();
});

app.listen(3000, () => console.log('Listening on port 3000!'));