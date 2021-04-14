export class Weapons {
    name: string;
    slug: string;
    category: string;
    cost: string;
    damage_dice: string;
    damage_type: string;
    weight: string;
    properties: string[];

    constructor(weaponsObj){
        this.name = weaponsObj.name;
        this.slug = weaponsObj.slug;
        this.category = weaponsObj.category;
        this.cost = weaponsObj.cost;
        this.damage_dice = weaponsObj.damage_dice;
        this.damage_type = weaponsObj.damage_type;
        this.weight = weaponsObj.weight;
        this.properties = weaponsObj.properties;
    }
}
