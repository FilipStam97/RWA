import { createHtmlElement } from "./DOMbuilder";
const DEFAULT_IMAGE_PATH = "https://static.wikia.nocookie.net/gameofthrones/images/c/c2/Iron_Throne.jpg";




export function renderCharacterView(host: HTMLElement, character: any) {
    
    
    host.innerHTML= "";

    let characterModalContetnt = createHtmlElement(host, "div", "modal-content");
    
    //Header
    let characterModalHeader = createHtmlElement(characterModalContetnt, "div", "characterModalHeader modal-header");

    let characterModalImage = <HTMLImageElement>createHtmlElement(characterModalHeader, "img", "characterModalImage");
    characterModalImage.src = character.characterImageFull;

    let characterModalHeaderName = createHtmlElement(characterModalHeader, "h3", "characterModalHeaderName")
    characterModalHeaderName.innerHTML= character.characterName;


    //Body
    let characterViewBody = createHtmlElement(characterModalContetnt, "div", "characterViewBody");
    
    if(character.actorName != null) {
    let characterViewActorName = createHtmlElement(characterViewBody, "p", "characterViewAttribute");
    characterViewActorName.innerHTML= "Actor: ";
    let characterViewActorLink = <HTMLAnchorElement>createHtmlElement(characterViewActorName, "a", "characterViewActorNameAnchor");
    characterViewActorLink.innerHTML =character.actorName;
    characterViewActorLink.href = `https://www.imdb.com/${character.actorLink}`;
    characterViewActorLink.target= "_blank";
    }
    
    if(character.actors.length != 0) {
        let characterViewActorName = createHtmlElement(characterViewBody, "p", "characterViewAttribute")
        characterViewActorName.innerHTML= "Actors: ";
        character.actors.forEach((actor: { actorName: string, actorLink: string; }) => {
            let characterViewActorLink = <HTMLAnchorElement>createHtmlElement(characterViewActorName, "a", "characterViewActorName");
            characterViewActorLink.innerHTML =`${actor.actorName}, `;
            characterViewActorLink.href = `https://www.imdb.com/${actor.actorLink}`;
            characterViewActorLink.target= "_blank";
        });
    }

    renderCharacterViewAttribute(characterViewBody, "House: ", character.houseName);

    renderCharacterViewAttribute(characterViewBody, "Killed: ", character.killed);

    renderCharacterViewAttribute(characterViewBody, "Killed By: ", character.killedBy);

    renderCharacterViewAttribute(characterViewBody, "Married/Engaged: ", character.marriedEngaged);

    renderCharacterViewAttribute(characterViewBody, "Parent Of: ", character.parentOf);

    renderCharacterViewAttribute(characterViewBody, "Parents: ", character.parents);

    renderCharacterViewAttribute(characterViewBody, "Siblings: ", character.siblings);

    if(character.royal) {
      let characterViewRoyal = createHtmlElement(characterViewBody, "p", "characterViewRoyal");
      characterViewRoyal.innerHTML= "Royalty";
    }

  

}

export function renderCharacterViewAttribute(host: HTMLElement, attributeTitle: string, attributeArray: Array<string>){

  if(attributeArray.length != 0) {
    let characterViewAttribute = createHtmlElement(host, "p", "characterViewAttribute")
    characterViewAttribute.innerHTML= attributeTitle;
    attributeArray.forEach((attribute: string) => {
      characterViewAttribute.innerHTML += `${attribute}, `;
    }); 
  }

}

export function renderCharacterModalWrapper(host: HTMLElement) {
  let characterModalViewDiv =createHtmlElement(host, "div", "modal fade");
  characterModalViewDiv.id = "cahracterView";
  characterModalViewDiv.tabIndex = -1;
  characterModalViewDiv.setAttribute("aria-labelledby","cahracterViewModal");
  characterModalViewDiv.setAttribute("aria-hidden","true");
  let characterModalDialog = createHtmlElement(characterModalViewDiv, "div", "modal-dialog");

}