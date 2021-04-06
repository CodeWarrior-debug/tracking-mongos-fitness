
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

//middleware of express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//bring in logger/morgan
app.use(morgan("dev"));

//fill in the proper values
mongoose.connect("mongodb://localhost/workout", {  useNewUrlParser: true,  useUnifiedTopology: true, useFindAndModify: false});

// Establish routes 
app.use(routes);

// start server
app.listen(PORT, () => {
    console.log(`http://localhost/${PORT}`);
  });
