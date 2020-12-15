const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();


//require routes
const { notes } = require('./develop/db/db.json');

    // access to starter files from public
app.use(express.static('public'));

//     // parse incoming string or array data
 app.use(express.urlencoded({ extended: true }));
//     // parse incoming JSON data
 app.use(express.json());
 
//add route 
app.get('/api/notes', (req, res) => {
    res.json(notes);
  });

//listen method
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });