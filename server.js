const express = require('express');
const app = express();



//listen method
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });