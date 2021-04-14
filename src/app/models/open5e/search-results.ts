export class SearchResults {
    name: String;
    desc: String;
    text: String;
    skill_proficiencies: string;
    tool_proficiencies: string;
    languages: string;
    equipment: string;
    feature: string;
    feature_desc: string;
    suggested_characteristics: string;

    constructor(searchObj){
        this.name = searchObj.name;
        this.desc = searchObj.desc;
        this.text = searchObj.text;
        this.skill_proficiencies = searchObj.skill_proficiencies;
        this.tool_proficiencies = searchObj.tool_proficiencies;
        this.languages = searchObj.languages;
        this.equipment = searchObj.equipment;
        this.feature = searchObj.feature;
        this.feature_desc = searchObj.feature_desc;
        this.suggested_characteristics = searchObj.suggested_characteristics;
        
    }
}
