export class Spell {
    slug: string;
    name: string;
    desc: string;
    higher_level: string;
    page: string;
    range: string;
    components: string;
    material: string;
    ritual: string;
    duration: string;
    concentration: string;
    casting_time: string;
    level: string;
    level_int: string;
    school: string;
    dnd_class: string;
    archetype: string;
    circles: string;
    document_slug: string;
    document_title: string;
    document_license_url: string;

    constructor(spellObj){
        
        this.slug = spellObj.slug;
        this.name= spellObj.name;
        this.desc= spellObj.desc;
        this.higher_level= spellObj.higher;
        this.page= spellObj.page;
        this.range= spellObj.range;
        this.components= spellObj.components;
        this.material= spellObj.material;
        this.ritual= spellObj.ritual;
        this.duration= spellObj.duration;
        this.concentration= spellObj.concentration;
        this.casting_time= spellObj.casting_time;
        this.level= spellObj.level;
        this.level_int= spellObj.level_int;
        this.school= spellObj.school;
        this.dnd_class= spellObj.dnd_class;
        this.archetype= spellObj.archetype;
        this.circles= spellObj.circles;
        this.document_slug= spellObj.document_slug;
        this.document_title= spellObj.document_title;
        this.document_license_url= spellObj.document_license_url;

    }
}