const express = require('express');
const router = express.Router();
const Character = require('../Models/Character');


router.get('/', (req, res) => {
    res.send("kurac");
});

router.get('/:characterID', async (req, res) => {
    try {
        const character = await Character.findById(req.params.characterID)
        res.json(character);


    } catch (err) {
        res.json({message: err});
    }
});

router.post('/t', async (req, res) => {
    try {
        const character = await Character.find({ siblings: {$all: req.body.siblings}});
        res.json(character);


    } catch (err) {
        res.json({message: err});
    }
});

module.exports = router;