const express = require('express');
const app = express();
const port = 3000;


app.get('/webhook', (req, res) => {
    res.send('Hello World!');
});
// 5. start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});