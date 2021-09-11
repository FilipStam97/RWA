

export interface Character {
    characterName: string,
    houseName: Array<string>,
    characterImageThumb: string,
    characterImageFull: string,
    characterLink: string,
    actorName: string,
    actorLink: string,
    royal: boolean,
    parents: Array<string>,
    siblings: Array<string>,
    killed: Array<string>,
    servedBy: Array<string>,
    parentOf: Array<string>,
    marriedEngaged: Array<string>,
    guardedBy: Array<string>,
    killedBy: Array<string>,
    abducted: Array<string>,
    abductedBy: Array<string>,
    allies: Array<string>,
    guardianOf: Array<string>,
    kingsguard: boolean,
    nickname: string,
    serves: Array<string>,
    actors: Array<Actor>
}

export interface Actor {
    actorName: string,
    actorLink: string,
    seasonsActive: Array<number>
}

export interface FilterObject {
    name: string;
    values: string[];
}