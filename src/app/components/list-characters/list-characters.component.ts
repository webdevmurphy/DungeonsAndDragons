import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user';
import { AngularFireDatabase } from '@angular/fire/database';
import { CharacterSheetObj } from '../../models/character/characterSheetObj';

import { NbToastrService, NbToastRef } from '@nebular/theme';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Photo } from '../../models/photo.model';
import { CharacterSheet } from 'src/app/models/character/characterSheet';
@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss']
})
export class ListCharactersComponent implements OnInit {
  user: User;
  playerSheet: CharacterSheetObj[];
  selectedOption;
  charname;
  constructor(
    private afs: AngularFirestore,
    public auth: AuthService,
    private db: AngularFireDatabase,
    private toastrService: NbToastrService,
    private router: Router,
  ) { }

  ngOnInit() {
  this.auth.user$.subscribe(user => this.user = user);

   this.auth.user$.subscribe(user => {
      if (user) {
        

        this.afs.collection('character', ref => ref.where('uid', '==', user.uid))
        .valueChanges().pipe(
          map(res => res.map( results => new CharacterSheetObj(results) ))
        ).subscribe(res => this.playerSheet = res)
      } 
    }
   )};


   toggle() {
    console.log(this.selectedOption);
    this.charname = this.selectedOption;
    this.router.navigate(['viewchar/' + this.charname]);
   }


   

}

