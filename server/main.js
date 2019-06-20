const express = require('express');  
const bodyParser = require('body-parser');
const db = require('./models'); 

const app = express();
var cors = require('cors');
app.use(cors())
app.use(bodyParser.json());  
// app.use(express.static(__dirname + '/static'));

app.get('/api/todos', (req, res) => {  
  
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

  return db.categories.findAll()
    .then((categories) => res.send(categories))
    .catch((err) => {
      console.log('There was an error querying categories', JSON.stringify(err))
      return res.send(err)
    });

});

app.post('/api/categories', (req, res) => {  
  
  console.log("New Category: " + req.body.Name);
  db.categories.create({name:req.body.Name})
  .catch((err) => {
    console.log('***There was an error creating a category', JSON.stringify(contact))
    return res.status(400).send(err)
  })

  return db.categories.findAll()
    .then((category) => res.send(category))
    .catch((err) => {
      console.log('***There was an error creating a category', JSON.stringify(contact))
      return res.status(400).send(err)
    })

});

app.delete('/api/categories/:id', (req, res) => {  

  const id = parseInt(req.params.id)
  return db.categories.findByPk(id)
    .then((category) => category.destroy())
    .then(() => res.send({ id }))
    .catch((err) => {
      console.log('***Error deleting contact', JSON.stringify(err))
      res.status(400).send(err)
    })
  
});

app.put('/api/categories/:id', (req, res) => {  

  const id = parseInt(req.params.id)

  return db.categories.findByPk(id)
  .then((category) => {
    // const Name = req.body.Name;

    return category.update({name:req.body.Name})
      .then(() => res.send(category))
      .catch((err) => {
        console.log('***Error updating category', JSON.stringify(err))
        res.status(400).send(err)
      })
  })

});

app.listen(3000, () => {  
  console.log('Server is up on port 3000');
});