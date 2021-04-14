export class Classes {
    name: string;
    slug: string;
    desc: string;
    hit_dice: string;
    hp_at_1st_level: string;
    hp_at_higher_levels: string;
    prof_armor: string;
    prof_weapons: string;
    prof_tools: string;
    equipment: string;
    table: string;
    spellcasting_ability: string;
    subtypes_name: string;
    archetypes: object[];

    constructor(classesObj){
        this.name = classesObj.name;
        this.slug = classesObj.slug;
        this.desc = classesObj.desc;
        this.hit_dice = classesObj.hit_dice;
        this.hp_at_1st_level = classesObj.hp_at_1st_level;
        this.hp_at_higher_levels = classesObj.hp_at_higher_levels;
        this.prof_armor = classesObj.prof_armor;
        this.prof_weapons = classesObj.prof_weapons;
        this.prof_tools = classesObj.prof_tools;
        this.equipment = classesObj.equipment;
        this.table = classesObj.table;
        this.spellcasting_ability = classesObj.spellcasting_ability;
        this.subtypes_name = classesObj.subtypes_name;
        this.archetypes = classesObj.archetypes;
    }
}
