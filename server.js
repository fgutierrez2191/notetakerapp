const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();


//require routes
const { notes } = require('./develop/db/db.json');



    // access to starter files from public
app.use(express.static('public'));

//add route 
app.get('/api/notes', (req, res) => {
    res.json(notes);
    console.log("getrouteworks");
  });
//post route
app.post('/api/notes', (req, res) => {
    // req.body is where our incoming content will be
    console.log(req.body);
    res.json(req.body);
  });

//     // parse incoming string or array data
 app.use(express.urlencoded({ extended: true }));
//     // parse incoming JSON data
 app.use(express.json());
 

//listen method
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });