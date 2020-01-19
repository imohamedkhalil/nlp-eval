var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const aylien = require('aylien_textapi');
const cors = require('cors');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');

dotenv.config();


var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});
console.log(`Your API key is ${process.env.API_KEY}`);

const app = express()
app.use(express.static('dist'))

console.log(__dirname)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const jsonParser = bodyParser.json();

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/add', jsonParser, function(req, res){
    textapi.sentiment({
        text: req.body.text
      }, function(error, response) {
        if (error === null) {
            res.send(response);
        }
    });
});

