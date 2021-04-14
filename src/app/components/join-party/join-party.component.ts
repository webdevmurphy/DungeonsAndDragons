import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { firestore } from 'firebase';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user';
import { AngularFireDatabase } from '@angular/fire/database';
import { gameSession } from '../../models/gameSession/gameSession';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbToastrService, NbToastRef } from '@nebular/theme';
import { Router } from '@angular/router';











@Component({
  selector: 'app-join-party',
  templateUrl: './join-party.component.html',
  styleUrls: ['./join-party.component.scss']
})
export class JoinPartyComponent implements OnInit {

  user: User;
  groupsession:Observable<any[]>;

  roomSelect: string[];


  constructor(
    private afs: AngularFirestore,
    public auth: AuthService,
    private db: AngularFireDatabase,
    private toastrService: NbToastrService,
    private router: Router,
  ) { }

  ngOnInit(){
    this.auth.user$.subscribe(user => this.user = user)
    this.groupsession = this.afs.collection('groupsession', ref => ref.orderBy('partyLeader', 'desc').limit(25)).valueChanges();
    console.log(this.groupsession);
    this.roomSelect = new Array<string>();
  }

  
  toggle2(e:any, partyLeader:string) {
    if(e.target.checked){
           console.log(partyLeader + "checked");
           this.roomSelect.push(partyLeader);
    }else {
       console.log(partyLeader + 'unchecked');
       //filter to uncheck what is not checked yet keep what is
       this.roomSelect = this.roomSelect.filter(m => m != partyLeader);
    }
    console.log(this.roomSelect);
 }




}
