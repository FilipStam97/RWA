export class Note {
    public title :string;
    public text :string;
    public date :string;
    constructor(title :string, text :string, date :string) {
        this.title=title;
        this.text=text;
        this.date=date;

    }

    printInfo() {
        console.log(`Title: ${this.title} , Text: ${this.text}`)
    }

}