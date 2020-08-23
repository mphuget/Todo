//Use Express middleware to manage incoming requests and 
//dispatch them to corresponding behaviours
const express = require('express');

//Create an application 
const app = express();

//Listen on the port 3000
app.listen(3000);

//Print out where the server is
console.log("Server is running on port: 3000");