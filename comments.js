// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file
// when someone visits http://localhost:3000/comments.html.
// The comments.html file should have a form that allows users to submit comments.
// The server should accept form submissions and store them in a global array.
// It should also serve a JSON representation of the array of comments.
// When someone visits http://localhost:3000/comments.json, the server should
// return the array of comments as JSON.

const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

const comments = [];

app.get('/comments.html', (req, res) =>




