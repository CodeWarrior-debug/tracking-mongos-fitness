
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;
const app = express();

//middleware of express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//fill in the proper values
mongoose.connect("mongodb://localhost/workout", {  useNewUrlParser: true,  useUnifiedTopology: true, useFindAndModify: false});

// 
app.listen(PORT, () => {
    console.log(`http://localhost/${PORT}`);
  });