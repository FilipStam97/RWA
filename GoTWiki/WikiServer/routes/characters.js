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
                filterObject["houseName"] = { "$in" : element.values};
                break;
            }
            case "killedBy": { 
                filterObject["killedBy"] = { "$in" : element.values};
                break;
            }
            case "killed": {
                filterObject["killed"] = { "$in" : element.values};
                break; 
            }
            case "marriedEngaged": {
                filterObject["marriedEngaged"] = { "$in" : element.values}; 
                break; 
            }
            case "parentOf": {
                filterObject["parentOf"] = { "$in" : element.values};
                break; 
            }
            case "parents": {
                filterObject["parents"] = { "$in" : element.values};
                break; 
            }
            case "siblings": {
                filterObject["siblings"] = { "$in" : element.values};
                break; 
            }
            default:
                break;

        }
    });
   // console.log(filterObject);
    return filterObject;
}





router.get('/', async (req, res) => {
    res.json("yooo");
});

router.get('/characterName/:value', async (req, res) => {
    const characters = await Character.find({characterName: new RegExp(req.params.value)});
    console.log(req.params.value);
    res.json(characters);
});

router.get('/actorName/:value', async (req, res) => {
    const characters = await Character.find({actorName: new RegExp(req.params.value)});
    console.log(req.params.value);

    res.json(characters);
});


router.get('/:characterID', async (req, res) => {
    try {
        const character = await Character.findById(req.params.characterID);
        res.json(character);


    } catch (err) {
        res.json({message: err});
    }
});

router.get('/filter', async (req, res) => {
    const values = await Character.distinct("siblings");
    res.json(values);
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