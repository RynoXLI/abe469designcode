const express = require('express');
const app = express();
const port = 8080;
const redis = require('redis');
const cors = require('cors');

const client = redis.createClient({
    port : 6379,
    host : 'localhost',
});

client.on('error', function(error) {
    console.log(error);
});

app.get('/', (req, res) => res.send("Welcome"));

// get proximity
app.get('/prox', cors(), (req, res) => {
    client.get('proximity', function(err, reply) {
        res.json({'proximity': reply});
    });
});

// get light intensity
app.get('/light', cors(), (req, res) => {
    client.get('light', function(err, reply) {
        res.json({'light': reply});
    });
});

// get white light
app.get('/white', cors(), (req, res) => {
    client.get('white', function(err, reply) {
        res.json({'white': reply});
    });
});

app.listen(port, () => console.log(`Application listening on port ${port}`));
