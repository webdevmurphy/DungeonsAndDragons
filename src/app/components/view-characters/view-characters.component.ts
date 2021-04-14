import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService, NbToastRef } from '@nebular/theme';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user';
import { CharacterSheetObj } from '../../models/character/characterSheetObj'
import { CharacterSheet } from '../../models/character/characterSheet'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-view-characters',
  templateUrl: './view-characters.component.html',
  styleUrls: ['./view-characters.component.scss']
})


export class ViewCharactersComponent implements OnInit {
 
  checked = false;
  checked1 = false;
  checked2 = false;
  checked3 = false;
  checked4 = false;
  checked5 = false;
  checked6 = false;
  checked7 = false;
  checked8 = false;
  checked9 = false;
  checked10 = false;
  checked11 = false;
  checked12 = false;
  checked13 = false;
  checked14 = false;
  checked15 = false;
  checked16 = false;
  checked17 = false;
  checked18 = false;
  checked19 = false;
  checked20 = false;
  checked21 = false;
  checked22 = false;
  checked23 = false;
  checked24 = false;
  checked25 = false;
  checked26 = false;
  checked27 = false;
  checked28 = false;
  checked29 = false;
  checked30 = false;
  
  model: CharacterSheet = new CharacterSheet( );
  user: User;
  playerSheet: CharacterSheetObj[];

  charname;

  constructor( private toastrService: NbToastrService,
    private storage: AngularFireStorage,
    private auth: AuthService,
    private afs: AngularFirestore,
    private route: ActivatedRoute) { }

  ngOnInit(){
    this.auth.user$.subscribe(user => this.user = user);
    
    this.auth.user$.subscribe(user => {
       if (user) {
        this.charname = this.route.snapshot.paramMap.get('charname');
         this.afs.collection('character', ref => ref.where('uid', '==', user.uid))
         .valueChanges().pipe(
           map(res => res.map( results => new CharacterSheetObj(results) ))
         ).subscribe(res => this.playerSheet = res)
       } 
     }
    )};










    

}
