import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user';
import { AngularFireDatabase } from '@angular/fire/database';
import { gameSessionC } from '../../models/gameSession/gameSessionC';
import { NbToastrService, NbToastRef } from '@nebular/theme';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Photo } from '../../models/photo.model';


@Component({
  selector: 'app-createparty',
  templateUrl: './createparty.component.html',
  styleUrls: ['./createparty.component.scss']
})
export class CreatepartyComponent implements OnInit {
model: gameSessionC = new gameSessionC;
selectedMembers: string[];
gameSessions: string[];
selectedCharacters: string[];
selectedFile:string[];
public images: Photo[];

  charname;
  checked3 = false;
  online:Observable<any[]>;
  user: User;
  downloadUrl;
 
  playerSheet:Observable<any[]>;

  checked = false;

  position = 'top-right';
  status = 'primary';
  status1 = 'danger';
  message ="Game Created";
  message1 ='Game Creation Failed';
  title ="Create Party";

  private isLoggedIn: boolean = false;
  createdGame: boolean = false;

 

  constructor(
      private afs: AngularFirestore,
      public auth: AuthService,
      private db: AngularFireDatabase,
      private toastrService: NbToastrService,
      private router: Router,
      ) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => this.user = user)
    this.online = this.afs.collection('online', ref => ref.orderBy('name', 'desc').limit(25)).valueChanges();
    this.playerSheet = this.afs.collection('character', ref => ref.orderBy('charname', 'desc').limit(25)).valueChanges();
    this.selectedMembers = new Array<string>();
    this.gameSessions = new Array<string>();
    this.selectedCharacters = new Array<string>();

   
    
    this.auth.user$.subscribe(user => {
      if (user) {
        this.isLoggedIn = true;

        this.afs.collection('photos', ref => ref.where('user.uid', '==', user.uid))
        .valueChanges().pipe(
          map(res => res.map( imgResult => new Photo(imgResult) ))
        ).subscribe(res => this.images = res)
      } else {
        this.isLoggedIn = false;

        this.afs.collection('photos')
        .valueChanges().pipe(
          map(res => res.map( imgResult => new Photo(imgResult) ))
        ).subscribe(res => this.images = res);
      }
    });
    this.selectedFile = new Array<string>();

  }
  
imgChoice(){
  console.log(this.downloadUrl);
}

  toggle(e:any, uid:string) {
     if(e.target.checked){
            console.log(uid + "checked");
            this.selectedMembers.push(uid);
     }else {
        console.log(uid + 'unchecked');
        //filter to uncheck what is not checked yet keep what is
        this.selectedMembers = this.selectedMembers.filter(m => m != uid);
     }
     console.log(this.selectedMembers);
  }

  toggle2(e:any, charname:string) {
    if(e.target.checked){
           console.log(charname + "checked");
           this.selectedCharacters.push(charname);
    }else {
       console.log(charname + 'unchecked');
       //filter to uncheck what is not checked yet keep what is
       this.selectedCharacters = this.selectedCharacters.filter(m => m != charname);
    }
    console.log(this.selectedMembers);
 }

  toggle3(checked3: boolean){
    this.checked3 = checked3;
   
      const itemRef = this.db.object(this.user.uid);
     itemRef.update({isDungeonMaster: this.model.isDungeonMaster});
   
    
  }

  toggle4(e:any, downloadUrl:string) {
    if(e.target.checked){
           console.log(downloadUrl + "checked");
           this.selectedFile.push(this.downloadUrl = downloadUrl);
    }else {
       console.log(downloadUrl + 'unchecked');
       //filter to uncheck what is not checked yet keep what is
       this.selectedFile = this.selectedFile.filter(m => m != downloadUrl);
    }
    console.log(this.selectedFile);
 }



  onSubmit(gamesession){
    gamesession.timestamp = `${new Date()}`;
    this.saveDungeonMaster(this.user.uid);
    this.afs.collection('groupsession').doc(this.user.uid).set(gamesession);
    this.afs.collection('groupsession').doc(this.user.uid).update({"partyLeader": this.user.uid, "selectedMembers": this.selectedMembers, "selectedCharacters": this.selectedCharacters, "downloadUrl": this.downloadUrl, "user": this.user})
    this.showToast(this.createdGame = true);
    this.charname = this.selectedCharacters.toString();
    this.router.navigate(['game-session/' + this.charname]);
  }


  saveDungeonMaster(userID){
    const itemRef = this.db.object(userID);
    itemRef.update({isDungeonMaster: this.model.isDungeonMaster});
  }

  showToast(createdGame) {
  if(createdGame == true){
      this.toastAlert(this.status, this.position);
   }
 if(createdGame == false){
      this.toastAlert1(this.status, this.position);
    }  
  }


 toastAlert(status, position){
  const toastRef: NbToastRef = this.toastrService.show(this.message, this.title, {status: status, position: position});
}
toastAlert1(status, position){
  const toastRef: NbToastRef = this.toastrService.show(this.message1, this.title, {status: status, position: position});
}



}
