const express = require('express');
const apiRoute = require('./routes/apiRoutes/index');
const htmlRoute = require('./routes/htmlRoutes/index');
const app = express();
const PORT = process.env.PORT || 3001;

    // parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

    // parse incoming JSON data
app.use(express.json());

//use public files
app.use(express.static('public'));  
app.use("/api", apiRoute);    
app.use('/', htmlRoute);



//listener
app.listen(PORT, () => {
    console.log(`API server on port ${PORT}`)
});