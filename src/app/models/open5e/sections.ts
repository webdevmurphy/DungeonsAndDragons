export class Sections {
    slug: string;
    name: string;
    desc: string;
    parent: string;

    constructor(sectionsObj){
        this.slug = sectionsObj.slug;
        this.name = sectionsObj.name;
        this.desc = sectionsObj.desc;
        this.parent = sectionsObj.parent;
    }
}
