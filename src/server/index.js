const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(express.static('dist'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

app.listen(3333, function () {
    console.log('Server running at http://localhost:3333');
});

//MeaningCloud API credentials:
const key = {
    applicationKey: process.env.API_KEY
};

app.get('/key', (req, res)=>{
    res.send(key);
})

