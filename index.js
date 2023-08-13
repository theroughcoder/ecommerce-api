const express = require('express');
const app = express();
const port = 5000;
const db = require("./config/mongoose");
const routes = require("./routes");

// parsing encoded data 
app.use(express.urlencoded());

// router middleware 
app.use("/", routes); 

// server listener 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})         
     