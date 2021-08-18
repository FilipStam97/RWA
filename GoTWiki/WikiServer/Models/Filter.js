const mongoose = require('mongoose');



const FilterSchema = mongoose.Schema({
    title: String,
    name: String,

});



module.exports = mongoose.model('Filter', FilterSchema);