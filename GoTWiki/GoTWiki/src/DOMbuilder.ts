
export function createHtmlElement(host: HTMLElement, element: string, className: string) {
    let childElement = document.createElement(element);
    childElement.className = className;
    host.appendChild(childElement);
    return <HTMLElement>childElement;
}

export function renderCheckBox(host: HTMLElement, checkBoxItem : string, checkBoxGroupName: string) {
    let checkBoxDiv = createHtmlElement(host,"div", "checkBoxDiv form-check");
    let checkBoxInput = <HTMLInputElement>createHtmlElement(checkBoxDiv,"input", "checkBoxInput form-check-input");
    checkBoxInput.type="checkbox";
    checkBoxInput.value=checkBoxItem;
    checkBoxInput.id=checkBoxItem+checkBoxGroupName;
    let checkBoxLabel = <HTMLLabelElement>createHtmlElement(checkBoxDiv,"label", "checkBoxLabel form-check-label");
    checkBoxLabel.setAttribute("for", checkBoxItem+checkBoxGroupName);
    checkBoxLabel.innerHTML= checkBoxItem;

}




export const FILTER_CONST = {
   elementArray: [
        {
            title: "Royalty",
            name: "royal",
            values : [
                "Royalty",
                "Not royalty"
            ]
        },
        {
            title: "House Name",
            name: "houseName",
            values : [
                "Targaryen",
                "Greyjoy",
                "Lannister",
                "Stark",
                "Frey",
                "Tully",
                "Baratheon",
                "Martell",
                "Mormont",
                "Tyrell",
                "Arryn",
                "Umber",
                "Bolton",
                "Tarly",
            ]
        },
        {
            title: "Killed By",
            name: "killedBy",
            values : [
                "Gregor Clegane",
                "Jaime Lannister",
                "Daario Naharis",
                "Jon Snow",
                "Jaqen H'ghar",
                "Tyene Sand",
                "Howland Reed",
                "Eddard Stark",
                "Euron Greyjoy",
                "Sons of the Harpy",
                "Wights",
                "Sandor Clegane",
                "Arya Stark",
                "Aerys II Targaryen",
                "Lem Lemoncloak",
                "Black Walder Rivers",
                "Summer",
                "Roof collapse",
                "Karl Tanner",
                "Daenerys Targaryen",
                "Night's Watchman",
                "Petyr Baelish",
                "Ellaria Sand",
                "Osha",
                "Ilyn Payne",
                "Wight",
                "White Walker",
                "Robert Baratheon",
                "Little Birds",
                "Unsullied",
                "Mag the Mighty",
                "Frey Crossbowmen",
                "Grey Worm",
                "Cersei Lannister",
                "Doreah",
                "Rast",
                "Olenna Tyrell",
                "Meera Reed",
                "Lysa Arryn",
                "Alliser Thorne",
                "Othell Yarwyck",
                "Bowen Marsh",
                "Olly",
                "Catelyn Stark",
                "Pack of Wights",
                "Wildling",
                "Drogon",
                "Mountain Clansman",
                "The Waif",
                "Bronn",
                "Hodor",
                "Polliver",
                "Wun Wun",
                "Old Age",
                "Maester Cressen",
                "Grenn",
                "Donnel Hill",
                "Cooper",
                "Khal Drogo",
                "Melisandre",
                "Podrick Payne",
                "Rickard Karstark",
                "Obara Sand",
                "Theon Greyjoy",
                "The Night King",
                "Ramsay Snow",
                "Viserion",
                "Rhaegal",
                "Ygritte",
                "Jorah Mormont",
                "Khal Jhaqo's Khalasar",
                "Ramsay Snow's Hounds",
                "Ghost",
                "Tormund Giantsbane",
                "Mirri Maz Duur",
                "Robb Stark",
                "Roose Bolton",
                "Boar",
                "Joffrey Baratheon",
                "Selyse Baratheon",
                "Lannister Guardsman",
                "Tyrion Lannister",
                "Smalljon Umber",
                "Pyat Pree",
                "Brienne of Tarth",
                "Meryn Trant",
                "Lothar Frey",
                "Samwell Tarly",
                "Tommen Baratheon",
                "Goldcloak",
                "Lyanna Mormont",
                "Amory Lorch"
            ]
        },
        {
            title: "Serves",
            name: "serves",
            values : [
            "Doran Martell",
            "Aerys II Targaryen",
            "Daenerys Targaryen",
            "Catelyn Stark",
            "Sansa Stark",
            "Bran Stark",
            "Stannis Baratheon",
            "Jon Snow",
            "Tywin Lannister",
            "Cersei Lannister",
            "Eddard Stark",
            "Tyrion Lannister",
            "Brienne of Tarth",
            ]
        },
        
    ]
}


