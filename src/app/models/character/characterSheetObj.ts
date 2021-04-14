export class CharacterSheetObj {
   
        public uid: string ;
        public charname:string;
        public classlevel:string;
        public background:string;
        public playername:string;
        public features:string;
        public equipment:string;
        public flaws:string;
        public personality:string;
        public bonds:string;
        public ideals:string;
        public race:string;
        public otherprofs:string;
        public alignment:string;
        public experiencepoints:number;
        public Strengthscore:number;
        public Strengthmod:string;
        public DexterityScore:number;
        public Dexteritymod:string;
        public Constitutionscore:number;
        public Constitutionmod:string;
        public Wisdomscore:number;
        public Wisdommod:string;
        public Intelligencescore:number;
        public Intelligencemod:string;
        public Charismascore:number;
        public Charismamod:string;
        public proficiencybonus:string;
        public Strengthsave:string;
        public Dexteritysave:string;
        public Constitutionsave:string;
        public Wisdomsave:string;
        public Intelligencesave:string;
        public Charismasave:string;
        public Acrobatics:string;
        public Animalhandling:string;
        public Arcana:string;
        public Athletics:string;
        public Deception:string;
        public History:string;
        public Insight:string;
        public Intimidation:string;
        public Investigation:string;
        public Medicine:string;
        public Nature:string;
        public Perception:string;
        public Performance:string;
        public Persuasion:string;
        public Religion:string;
        public Sleightofhand:string;
        public Stealth:string;
        public Survival:string;
        public PassivePerception:number;
        public ac:number;
        public Initiative:string;
        public speed:number;
        public maxHP:number;
        public currentHP:number;
        public tempHP:number;
        public totalHD:string;
        public remainingHD:string;
        public atkname1:string;
        public atkbonus1:string;
        public atkdamage1:string;
        public atkname2:string;
        public atkbonus2:string;
        public atkdamage2:string;
        public atkname3:string;
        public atkbonus3:string;
        public atkdamage3:string;
        public sp:number;
        public pp:number;
        public gp:number;
        public ep:number;
        public cp:number;
        public inspiration:boolean;
        public medicineprof:boolean;
        public natureprof:boolean;
        public perceptionprof:boolean;
        public performanceprof:boolean;
        public persuasionprof:boolean;
        public sleightofhandprof:boolean;
        public religionprof:boolean;
        public stealthprof:boolean;
        public survivalprof:boolean;
        public deathsuccess1:boolean;
        public deathsuccess2:boolean;
        public deathsuccess3:boolean;
        public deathfail1:boolean;
        public deathfail2:boolean;
        public deathfail3:boolean;
        public strengthsaveprof:boolean;
        public dexteritysaveprof:boolean;
        public charismasaveprof:boolean;
        public intelligencesaveprof:boolean;
        public constitutionsaveprof:boolean;
        public wisdomsaveprof:boolean;
        public acrobaticsprof:boolean;
        public athleticsprof:boolean;
        public animalhandlingprof:boolean;
        public arcanaprof:boolean;
        public deceptionprof:boolean;
        public historyprof:boolean;
        public insightprof:boolean;
        public intimidationprof:boolean;
        public investigationprof:boolean; 
  
  constructor(charObj){
     this.uid = charObj.uid;
     this.charname = charObj.charname;
     this.classlevel = charObj.classlevel;
     this.background = charObj.background;
     this.playername = charObj.playername;
     this.features = charObj.features;
     this.equipment = charObj.equipment;
     this.flaws = charObj.flaws;
     this.personality = charObj.personality;
     this.bonds = charObj.bonds;
     this.ideals = charObj.ideals;
     this.race = charObj.race;
     this.otherprofs = charObj.otherprofs;
     this.alignment = charObj.alignment;
     this.experiencepoints = charObj.experiencepoints;
     this.Strengthscore = charObj.Strengthscore;
     this.Strengthmod = charObj.Strengthscore;
     this.DexterityScore = charObj.DexterityScore;
     this.Dexteritymod = charObj.Dexteritymod;
     this.Constitutionscore = charObj.Constitutionscore;
     this.Constitutionmod = charObj.Constitutionmod;
     this.Wisdomscore = charObj.Wisdomscore;
     this.Wisdommod = charObj.Wisdommod;
     this.Intelligencescore = charObj.Intelligencescore;
     this.Intelligencemod = charObj.Intelligencemod;
     this.Charismascore = charObj.Charismascore;
     this.Charismamod = charObj.Charismamod;
     this.proficiencybonus = charObj.proficiencybonus;
     this.Strengthsave = charObj.Strengthsave;
     this.Dexteritysave = charObj.Dexteritysave;
     this.Constitutionsave = charObj.Constitutionsave;
     this.Wisdomsave = charObj.Wisdomsave;
     this.Intelligencesave = charObj.Intelligencesave;
     this.Charismasave = charObj.Charismasave;
     this.Acrobatics = charObj.Acrobatics;
     this.Animalhandling = charObj.Animalhandling;
     this.Arcana = charObj.Arcana;
     this.Athletics = charObj.Athletics;
     this.Deception = charObj.Deception;
     this.History = charObj.History;
     this.Insight = charObj.Insight;
     this.Intimidation = charObj.Intimidation;
     this.Investigation = charObj.Investigation;
     this.Medicine = charObj.Medicine;
     this.Nature = charObj.Nature;
     this.Perception = charObj.Perception;
     this.Performance = charObj.Performance;
     this.Persuasion = charObj.Persuasion;
     this.Religion = charObj.Religion;
     this.Sleightofhand = charObj.Sleightofhand;
     this.Stealth = charObj.Stealth;
     this.Survival = charObj.Survival;
     this.PassivePerception = charObj.PassivePerception;
     this.ac = charObj.ac;
     this.Initiative = charObj.Initiative;
     this.speed = charObj.speed;
     this.maxHP = charObj.maxHP;
     this.currentHP = charObj.currentHP;
     this.tempHP = charObj.tempHP;
     this.totalHD = charObj.totalHD;
     this.remainingHD = charObj.remainingHD;
     this.atkname1 = charObj.atkname1;
     this.atkbonus1 = charObj.atkbonus1;
     this.atkdamage1 = charObj.atkdamage1;
     this.atkname2 = charObj.atkname2;
     this.atkbonus2 = charObj.atkbonus2;
     this.atkdamage2 = charObj.atkdamage2;
     this.atkname3 = charObj.atkname3;
     this.atkbonus3 = charObj.atkbonus3;
     this.atkdamage3 = charObj.atkdamage3
     this.sp = charObj.sp;
     this.pp = charObj.pp;
     this.gp = charObj.gp;
     this.ep = charObj.ep;
     this.cp = charObj.cp;
     this.inspiration = charObj.inspiration;
     this.medicineprof = charObj.medicineprof;
     this.natureprof = charObj.natureprof;
     this.perceptionprof = charObj.perceptionprof;
     this.performanceprof = charObj.performanceprof;
     this.persuasionprof = charObj.persuasionprof;
     this.sleightofhandprof = charObj.sleightofhandprof;
     this.religionprof = charObj.religionprof;
     this.stealthprof = charObj.stealthprof;
     this.survivalprof = charObj.survivalprof;
     this.deathsuccess1 = charObj.deathsuccess1;
     this.deathsuccess2 = charObj.deathsuccess2;
     this.deathsuccess3 = charObj.deathsuccess3;
     this.deathfail1 = charObj.deathfail1;
     this.deathfail2 = charObj.deathfail2;
     this.deathfail3 = charObj.deathfail3;
     this.strengthsaveprof = charObj.strengthsaveprof;
     this.dexteritysaveprof = charObj.dexteritysaveprof;
     this.charismasaveprof = charObj.charismasaveprof;
     this.intelligencesaveprof = charObj.intelligencesaveprof;
     this.constitutionsaveprof = charObj.constitutionsaveprof;
     this.wisdomsaveprof = charObj.wisdomsaveprof;
     this.acrobaticsprof = charObj.acrobaticsprof;
     this.athleticsprof = charObj.athleticsprof;
     this.animalhandlingprof = charObj.animalhandlingprof;
     this.arcanaprof = charObj.arcanaprof;
     this.deceptionprof = charObj.deceptionprof;
     this.historyprof = charObj.historyprof;
     this.insightprof = charObj.insightprof;
     this.intimidationprof = charObj.intimidationprof;
     this.investigationprof = charObj.investigationprof;












  }
















    
}