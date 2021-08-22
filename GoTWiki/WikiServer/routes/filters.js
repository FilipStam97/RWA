const express = require('express');
const router = express.Router();
const Filter = require('../Models/Filter');



router.get('/', async (req, res) => {
    let filters = await Filter.find();
    res.json(filters);
});




module.exports = router;