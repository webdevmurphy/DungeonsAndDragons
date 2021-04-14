import { UrlSerializer } from '@angular/router';

export class gameInfo {
    spells?:string;
    monsters?:string;
    documents?: string;
    backgrounds?:string;
    planes?: string;
    sections?: string;
    feats?: string;
    conditions?: string;
    races?: string;
    classes?: string;
    magicitems?: string;
    weapons?: string;
    search?:string;



    constructor(userObj) {
        this.spells = userObj.spells;
        this.monsters = userObj.email;
        this.documents = userObj.photoURL;
        this.backgrounds = userObj.backgrounds;
    }




}