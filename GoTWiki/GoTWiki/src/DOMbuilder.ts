import { BehaviorSubject, fromEvent } from "rxjs";
import { map } from "rxjs/operators";

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
    checkBoxInput.name=checkBoxGroupName;
    checkBoxInput.id=checkBoxItem+checkBoxGroupName;
    let checkBoxLabel = <HTMLLabelElement>createHtmlElement(checkBoxDiv,"label", "checkBoxLabel form-check-label");
    checkBoxLabel.setAttribute("for", checkBoxItem+checkBoxGroupName);
    checkBoxLabel.innerHTML= checkBoxItem;

    // fromEvent(checkBoxInput, "input").pipe(
    //     map((ev: InputEvent) => (<HTMLInputElement>ev.target).value),
    //     ).subscribe((el) => {
    //         console.log(el);
    //     });



}

export const SERVER_CONNECTION = "http://localhost:3000";





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
            title: "Killed",
            name: "killed",
            values : ["Aegon Targaryen","Aerys II Targaryen","Akho","Alliser Thorne","Alton Lannister","Amory Lorch","Areo Hotah","Arthur Dayne","Axell Florent","Balon Greyjoy","Barra","Belicho Paenymion","Beric Dondarrion","Biter","Black Walder Rivers","Bolton Officer","Bolton Soldier","Bowen Marsh","Brandon Stark","Brother Ray","Catelyn Stark","Catspaw Assassin","Cooper","Craster","Daenerys Targaryen","Despondent Man","Dickon Tarly","Donnel Hill","Dontos Hollard","Doran Martell","Doreah","Dothraki Bloodrider #1","Dothraki Bloodrider #2","Drennan","Dying Man","Eddard Stark","Eleanor","Eleanor's Daughter","Elia Martell","Euron Greyjoy","Faith Militant","Frey Soldier #1","Frey Soldier #2","Gatins","Gerold Hightower","Ghita","Gordy","Great Master #1","Gregor Clegane","Grenn","Guymon","Harrag","Harry Strickland","High Sparrow","Hugh of the Vale","Iggo","Irri","Janos Slynt","Jeor Mormont","Joffrey Baratheon","Jojen Reed","Jon Arryn","Jon Snow","Jory Cassel","Joyeuse Erenford","Karl Tanner","Kevan Lannister","Kevin Eldon","Khal Brozho","Khal Drogo","Khal Forzho","Khal Moro","Khal Qorro","Khal Rhalko","King's Landing Boaster","Kings Landing Rioter #1","Kings Landing Rioter #2","Kings Landing Rioter #3","Kraznys mo Nakloz","Lady","Lady Cerwyn","Lady Crane","Lancel Lannister","Laurence Spellman","Lead Dornish Guard","Lem Lemoncloak","Locke","Lommy Greenhands","Loras Tyrell","Lord Varys","Lothar Frey","Lowell","Lyanna Mormont","Lyanna Stark","Lysa Arryn","Mace Tyrell","Maester Caleotte","Maester Cressen","Maester Luwin","Mag the Mighty","Mago","Mance Rayder","Mandon Moore","Margaery Tyrell","Martyn Lannister","Master Torturer","Matthos Seaworth","Medger Cerwyn","Meereenese Champion","Merchant Captain","Mero","Meryn Trant","Mirri Maz Duur","Missandei","Mole's Town Whore","Morgan","Mossador","Mycah","Myranda","Myrcella Baratheon","Ned Umber","Norvoshi Pit Fighter","Nymeria Sand","Obara Sand","Oberyn Martell","Old Man","Old Woman","Olenna Tyrell","Olly","Olly's Mother","Orell","Osha","Othell Yarwyck","Othor","Oznak zo Pahl","Petyr Baelish","Polliver","Prendahl na Ghezn","Pyat Pree","Pypar","Qhorin Halfhand","Qotho","Qyburn","Randyll Tarly","Rast","Rattleshirt","Razdal mo Eraz","Red Keep Stableboy","Renly Baratheon","Rennick","Rhaegal","Rhaegar Targaryen","Rhaego","Rhaenys Targaryen","Rickard Karstark","Rickard Stark","Rickon Stark","Riddell","Robb Stark","Rodrik Cassel","Roose Bolton","Rorge","Ros","Sandor Clegane","Selyse Baratheon","Shae","Shaggydog","Shireen Baratheon","Silk King","Simpson","Smalljon Umber","Soldier Tom","Son of the Harpy","Spice King","Stannis Baratheon","Steve","Stiv","Styr","Syrio Forel","Talisa Maegyr","The Night King","The Tickler","The Waif","Thenn Warg","Theon Greyjoy","Three-Eyed Raven","Tommen Baratheon","Torrhen Karstark","Tortured Prisoner","Trystane Martell","Tyene Sand","Tywin Lannister","Unidentified Cerwyn","Vardis Egen","Viserion","Viserys Targaryen","Walder Frey","Wallen","White Walker","Will","Willem Lannister","Wun Wun","Xaro Xhoan Daxos","Ygritte","Yoren","Zalla"]
        },
        {
            title: "Married/Engaged",
            name: "marriedEngaged",
            values: ["Aerys II Targaryen","Brandon Stark","Bronn","Catelyn Stark","Cersei Lannister","Daenerys Targaryen","Eddard Stark","Edmure Tully","Elia Martell","Ellaria Sand","Gilly","Joffrey Baratheon","Jon Snow","Joyeuse Erenford","Khal Drogo","Kitty Frey","Lollys Stokeworth","Lyanna Stark","Lysa Arryn","Margaery Tyrell","Melessa Tarly","Myrcella Baratheon","Oberyn Martell","Petyr Baelish","Ramsay Snow","Randyll Tarly","Renly Baratheon","Rhaegar Targaryen","Rhaella Targaryen","Robb Stark","Robert Baratheon","Roose Bolton","Roslin Frey","Samwell Tarly","Sansa Stark","Selyse Baratheon","Stannis Baratheon","Talisa Maegyr","Tommen Baratheon","Trystane Martell","Tyrion Lannister","Walda Bolton","Walder Frey","Ygritte"]
        },
        {
            title: "Parent Of",
            name: "parentOf",
            values: ["Aegon Targaryen","Alys Karstark","Arya Stark","Baby Sam","Benjen Stark","Black Walder Rivers","Bran Stark","Brandon Stark","Cersei Lannister","Daenerys Targaryen","Dickon Tarly","Eddard Stark","Harald Karstark","Jaime Lannister","Joffrey Baratheon","Johnna","Jojen Reed","Jon Snow","Jorah Mormont","Lancel Lannister","Loras Tyrell","Lothar Frey","Lyanna Stark","Mace Tyrell","Margaery Tyrell","Martyn Lannister","Matthos Seaworth","Meera Reed","Myrcella Baratheon","Nymeria Sand","Obara Sand","Ramsay Snow","Rhaegar Targaryen","Rhaego","Rhaenys Targaryen","Rickon Stark","Robb Stark","Roslin Frey","Ryger Rivers","Samwell Tarly","Sansa Stark","Shireen Baratheon","Smalljon Umber","Talla Tarly","Theon Greyjoy","Tommen Baratheon","Trystane Martell","Tyene Sand","Tyrion Lannister","Viserys Targaryen","Waymar Royce","Willa","Willem Lannister","Yara Greyjoy"]
        },
        {
            title: "Children Of",
            name: "parents",
            values: ["Aerys II Targaryen","Balon Greyjoy","Catelyn Stark","Cersei Lannister","Craster","Daenerys Targaryen","Davos Seaworth","Doran Martell","Eddard Stark","Elia Martell","Ellaria Sand","Gilly","Greatjon Umber","Harald Karstark","Hoster Tully","Howland Reed","Jaime Lannister","Jeor Mormont","Jon Arryn","Kevan Lannister","Khal Drogo","Lyanna Stark","Lysa Arryn","Mace Tyrell","Melessa Tarly","Oberyn Martell","Randyll Tarly","Rhaegar Targaryen","Rhaella Targaryen","Rickard Karstark","Rickard Stark","Robert Baratheon","Roose Bolton","Samwell Tarly","Selyse Baratheon","Stannis Baratheon","Tywin Lannister","Walder Frey","Yohn Royce"]
        },
        {
            title: "Siblings",
            name: "siblings",
            values: ["Aeron Greyjoy","Aerys II Targaryen","Arya Stark","Balon Greyjoy","Benjen Stark","Bran Stark","Brandon Stark","Catelyn Stark","Catelyn Tully","Cersei Lannister","Daenerys Targaryen","Dickon Tarly","Doran Martell","Drogon","Eddard Stark","Edmure Tully","Elia Martell","Euron Greyjoy","Ghost","Gregor Clegane","Grey Wind","Hoster Tully","Jaime Lannister","Joffrey Baratheon","Jon Snow","Lady","Lancel Lannister","Loras Tyrell","Lyanna Stark","Lysa Arryn","Margaery Tyrell","Martyn Lannister","Meera Reed","Myrcella Baratheon","Nymeria","Oberyn Martell","Renly Baratheon","Rhaegal","Rhaegar Targaryen","Rhaella Targaryen","Rhaenys Targaryen","Rickon Stark","Robb Stark","Robert Baratheon","Samwell Tarly","Sansa Stark","Shaggydog","Stannis Baratheon","Summer","Talla Tarly","Theon Greyjoy","Tommen Baratheon","Tyrion Lannister","Tywin Lannister","Viserion","Viserys Targaryen","Willem Lannister","Yara Greyjoy"]
        },

        
    ]
}


