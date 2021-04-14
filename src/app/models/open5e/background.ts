export class Background {
    name: string;
    desc: string;
    slug: string;
    skill_proficiencies: string;
    tool_proficiencies: string;
    languages: string;
    equipment: string;
    feature: string;
    feature_desc: string;
    suggested_characteristics: string;
    document_slug: string;
    document_title: string;
    document_license_url: string; //not sure if last three are needed, will delete if necessary

    constructor(backgroundObj){
        this.name = backgroundObj.name;
        this.desc = backgroundObj.desc;
        this.slug = backgroundObj.slug;
        this.skill_proficiencies = backgroundObj.skill_proficiencies;
        this.tool_proficiencies = backgroundObj.tool_proficiencies;
        this.languages = backgroundObj.languages;
        this.equipment = backgroundObj.equipment;
        this.feature = backgroundObj.feature;
        this.feature_desc = backgroundObj.feature_desc;
        this.suggested_characteristics = backgroundObj.suggested_characteristics;
    }
}
