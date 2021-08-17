const mongoose = require('mongoose');



const CharacterSchema = mongoose.Schema({
    characterName: String,
    houseName: [String],
    characterImageThumb: String,
    characterImageFull: String,
    characterLink: String,
    actorName: String,
    actorLink: String,
    royal: Boolean,
    parents: [String],
    siblings: [String],
    killed: [String],
    servedBy: [String],
    parentOf: [String],
    marriedEngaged: [String],
    guardedBy: [String],
    killedBy: [String],
    abducted: [String],
    abductedBy: [String],
    allies: [String],
    guardianOf: [String],
    kingsguard: Boolean,
    nickname: String,
    serves: [String],
    actors: [{
        actorName: String,
        actorLink: String,
        seasonsActive: [Number]
    }] 


});



module.exports = mongoose.model('Character', CharacterSchema);