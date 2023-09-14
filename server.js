const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Serve static files from the client folder
app.use(express.static('client'));

// Parse URL encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies
app.use(bodyParser.json());

// Route for serving the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/client/register.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/client/login.html');
});


// Start the server
app.listen(8080, () => {
    console.log(`Server is running on port 8080`);
    }
);