const express = require('express');
const logger = require('./logger');

const app = express();

app.get('/', (req, res) => {
    logger.info('Home API called');
    res.send('Hello from GET API 🚀');
});

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    logger.info(`User API called with ID: ${id}`);
    res.json({ id, name: "Test User" });
});

app.listen(3000, () => {
    logger.info('Server running on port 3000');
});