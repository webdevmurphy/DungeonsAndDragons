export class Planes {
    slug: string;
    name: string;
    desc: string;

    constructor(planeObj){
        this.slug = planeObj.slug;
        this.name = planeObj.name;
        this.desc = planeObj.desc;
    }
}
