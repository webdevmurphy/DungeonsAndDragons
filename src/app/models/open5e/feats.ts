export class Feats {
    slug: string;
    name: string;
    desc: string;
    prerequisite: string;

    constructor(featsObj){
        this.slug = featsObj.slug;
        this.name = featsObj.name;
        this.desc = featsObj.desc;
        this.prerequisite = featsObj.prerequisite;
    }
}
