require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const messagesCtrl = require('./messagesCtrl');

const { SERVER_PORT } = process.env;

const app = express();

// top level middleware -- runs with each request
app.use(bodyParser.json());

// endpoints
app.get('/api/messages', messagesCtrl.getAllMessages);
app.post('/api/messages', messagesCtrl.createMessage);

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port: ${SERVER_PORT}`);
});
