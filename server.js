const express = require('express');
const app = express();
const apiRoute = require('./routes/apiRoutes/index');
const htmlRoute = require('./routes/htmlRoutes/index');
const PORT = process.env.PORT || 3001;

    // parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
    // parse incoming JSON data
app.use(express.json());
  
app.use("/api", apiRoute);    
app.use('/', htmlRoute);

//use public files
app.use(express.static('public'));

//listener
app.listen(PORT, () => {
    console.log(`API server on port ${PORT}`)
});