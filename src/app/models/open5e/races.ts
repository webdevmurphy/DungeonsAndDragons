export class Races {
    name: string;
    slug: string;
    desc: string;
    asi_desc: string;
    asi: object[];
    age: string;
    alignment: string;
    size: string;
    speed: object;
    speed_desc: string;
    languages: string;
    vision: string;
    traits: string;
    subraces: object[];

    constructor(racesObj){
        this.name = racesObj.name;
        this.slug = racesObj.slug;
        this.desc = racesObj.desc;
        this.asi_desc = racesObj.asi_desc;
        this.asi = racesObj.asi;
        this.age = racesObj.age;
        this.alignment = racesObj.alignment;
        this.size = racesObj.size;
        this.speed = racesObj.speed;
        this.speed_desc = racesObj.speed_desc;
        this.languages = racesObj.languages;
        this.vision = racesObj.vision;
        this.traits = racesObj.traits;
        this.subraces = racesObj.subraces;
    }
}
