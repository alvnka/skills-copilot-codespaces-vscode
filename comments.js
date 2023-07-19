//create a webserver
//create a route
//create a response
//send the response
//listen on port 3000

const express = require('express');
const app = express();

const comments = require('./comments.json');

app.get('/', (req, res) => {
    res.send('Welcome to our comments database');
});

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.get('/comments/:id', (req, res) => {
    const commentId = req.params.id;
    const getComment = comments.find(comment => comment.id === Number(commentId));
    res.json(getComment);
});

app.post('/comments', (req, res) => {
    res.send('POST request to homepage');
});

app.put('/comments/:id', (req, res) => {
    res.send('PUT request to homepage');
});

app.delete('/comments/:id', (req, res) => {
    res.send('DELETE request to homepage');
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000. Ready to accept requests!');
});
