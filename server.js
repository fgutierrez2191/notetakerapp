const fs = require('fs');
const path = require('path');
const express = require('express');
//require routes
let jsonNotes = require('./db/db.json');
const app = express();
const PORT = process.env.PORT || 3001;

   // parse incoming JSON data
   app.use(express.json());

  // parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// access to starter files from public
app.use(express.static('public'));

app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get('/notes', (req, res) => {
 

  res.sendFile(path.join(__dirname, "./public/notes.html"));
});



//add route 
app.get('/api/notes', (req, res) => {
    res.json(jsonNotes);
    console.log("getrouteworks");
  });

//post route
app.post('/api/notes', (req, res) => {
    // req.body is where our incoming content will be
    console.log(req.body);
    res.json(req.body);
  });

 

//listen method
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });