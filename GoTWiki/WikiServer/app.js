const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const DB_CONNECTION = 'mongodb://localhost:27017/GoT';

const app = express();

//Middleware
app.use(bodyParser.json());

//Imported routes
const charactersRoute = require('./routes/characters');
app.use('/characters', charactersRoute);


//Routes
app.get('/', (req, res) => {
    res.send("Helooooouuuuuuuuuuuuuuuuuuuuu");
})


//Connect to db
mongoose.connect(DB_CONNECTION, {useNewUrlParser: true}, () => {
    console.log('connected to DB');
});


// Listening to the server
app.listen(3000); 