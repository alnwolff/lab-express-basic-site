const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/home.html');
})

app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/views/about.html');
})

app.get('/works', function (req, res) {
    res.sendFile(__dirname + '/views/works.html');
})

app.get('/gallery', function (req, res) {
    res.sendFile(__dirname + '/views/gallery.html');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log('Server Listening');
})