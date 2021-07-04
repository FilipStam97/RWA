
export interface Movie {
    id: number;
    name: string;
    wiki: string;
    characters: Array<Character>;
    series: string;
    released: string;
}


export interface Character {
    name: string;
    mainseries: string;
}

export interface FilterObject {
    name: string;
    values: string[];
}