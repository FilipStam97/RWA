const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const DB_CONNECTION = 'mongodb://localhost:27017/GoT';

const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());

//Imported routes
const charactersRoute = require('./routes/characters');
app.use('/characters', charactersRoute);

const filtersRoute = require('./routes/filters');
app.use('/filters', filtersRoute);


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