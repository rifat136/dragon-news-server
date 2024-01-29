const express = require('express');
const app = express();
const cors = require('cors');
// const port = process.env.PORT || 5000;
const port = 5000;

const catagories = require('./Data/catagories.json');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/catagories', (req, res) => {
    res.send(catagories);
})

app.listen(port, () => {
    console.log(`Dragon News is running on ${port}`)
})