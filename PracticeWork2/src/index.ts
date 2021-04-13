import { Note } from "./Note";
import { NoteApp } from "./NoteApp";

console.log('saftaj tuksona');

let newApp = new NoteApp();
newApp.renderNoteApp(document.body);
const notes =[];
notes.push(new Note('Note1', 'Tukson', 'aaaaaaa'));
notes.push(new Note('Note69999', 'HjundaiTukon', 'bbbbbb'));

console.log(notes);
