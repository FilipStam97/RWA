const express = require('express');
const router = express.Router();
const Character = require('../Models/Character');


function createFilterObject(reqObject) {
    let filterObject = {};
    reqObject.filterArray.forEach(element => {
        switch(element.name) {
            case "royal": {
                filterObject["royal"] = (element.values[0]=="Royalty") ? true : null;
                break;
            }
            case "houseName": {
                filterObject["houseName"] = { "$all" : element.values};
                break;
            }
            case "killedBy": {
                filterObject["killedBy"] = { "$all" : element.values};
                break;
            }
            case "serves": {
                filterObject["serves"] = { "$all" : element.values};
                break;
            }
            default:
                break;

        }
    });
   // console.log(filterObject);
    return filterObject;
}


router.get('/', (req, res) => {
    res.send("Characfters");
});

router.get('/:characterID', async (req, res) => {
    try {
        const character = await Character.findById(req.params.characterID)
        res.json(character);


    } catch (err) {
        res.json({message: err});
    }
});

router.post('/filter', (req, res, next) => { req.body = createFilterObject(req.body); next(); }, async (req, res) => {
    try {
        console.log(req.body);
        const character = await Character.find(req.body);
        res.json(character);


    } catch (err) {
        res.json({message: err});
    }
});

module.exports = router;