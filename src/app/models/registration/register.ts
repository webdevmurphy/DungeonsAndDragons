export class Registration {
    constructor(
      public Mr:boolean=false,
      public Ms:boolean=false,
      public none:boolean=false,
      public firstName:string= null,
      public lastName:string=null,
      public addressLn1:string=null,
      public addressLn2:string=null,
      public city:string=null,
      public state:string=null,
      public zip:number= null,
      public country:string=null,
      public primaryPhone:string=null,
      public memberName:string=null,
      public dungeonMaster:boolean=false,
      public isRegisteredMember: boolean = false,
      public uid:string= null,
      public email:string=null){
  
      }
  }