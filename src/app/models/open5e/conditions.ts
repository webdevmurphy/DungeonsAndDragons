import { VirtualTimeScheduler } from 'rxjs';

export class Conditions {
    slug: string;
    name: string;
    desc: string;

    constructor(conditionObj){
        this.slug = conditionObj.slug;
        this.name = conditionObj.name;
        this.desc = conditionObj.desc;
    }
}


