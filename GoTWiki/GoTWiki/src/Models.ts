

export interface Character {
    characterName: string,
    houseName: [string],
    characterImageThumb: string,
    characterImageFull: string,
    characterLink: string,
    actorName: string,
    actorLink: string,
    royal: boolean,
    parents: [string],
    siblings: [string],
    killed: [string],
    servedBy: [string],
    parentOf: [string],
    marriedEngaged: [string],
    guardedBy: [string],
    killedBy: [string],
    abducted: [string],
    abductedBy: [string],
    allies: [string],
    guardianOf: [string],
    kingsguard: boolean,
    nickname: string,
    serves: [string],
    actors: [{
        actorName: string,
        actorLink: string,
        seasonsActive: [number]
    }] 
}

export interface Actor {
    
}

export interface FilterObject {
    name: string;
    values: string[];
}