const express = require('express');  
const bodyParser = require('body-parser');
const db = require('./models'); 

const app = express();

app.use(bodyParser.json());  
// app.use(express.static(__dirname + '/static'));

app.get('/api/todos', (req, res) => {  
  // TODO: retreive contacts and send to requester
});

app.post('/api/todos', (req, res) => {  
  const { firstName, lastName, phone } = req.body
  // TODO: create contact
});

app.delete('/api/todos/:id', (req, res) => {  
  const id = parseInt(req.params.id)
  // TODO: find and delete contact by id
});

app.put('/api/todos/:id', (req, res) => {  
  const id = parseInt(req.params.id)
  const { firstName, lastName, phone } = req.body
  // TODO: find and update contact by id
});

app.get('/api/categories', (req, res) => {  
  // TODO: retreive contacts and send to requester
});

app.post('/api/categories', (req, res) => {  
  const { firstName, lastName, phone } = req.body
  // TODO: create contact
});

app.delete('/api/categories/:id', (req, res) => {  
  const id = parseInt(req.params.id)
  // TODO: find and delete contact by id
});

app.put('/api/categories/:id', (req, res) => {  
  const id = parseInt(req.params.id)
  const { firstName, lastName, phone } = req.body
  // TODO: find and update contact by id
});

app.listen(3000, () => {  
  console.log('Server is up on port 3000');
});