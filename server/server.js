require('./config/config');

const path = require('path');

const publicPath = path.join(__dirname, '../public');

const express = require('express');

const app = express();
const port = process.env.PORT;
app.use(express.static(publicPath));

app.get('/', (req, res) => {

    res.send('Hello chat app');
});

app.listen(port, () => {
    console.log('Started on port 3000')
});

module.exports = {app};