export class Magicitems {
    slug: string;
    name: string;
    type: string;
    desc: string;
    rarity: string;
    requires_attunement: string;

    constructor(MagicitemsObj){
        this.slug = MagicitemsObj.slug;
        this.name = MagicitemsObj.name;
        this.type = MagicitemsObj.type;
        this.desc = MagicitemsObj.desc;
        this.rarity = MagicitemsObj.rarity;
        this.requires_attunement = MagicitemsObj.requires_attunement;
    }
}
