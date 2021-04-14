import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { firestore } from 'firebase';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user';
import { Photo } from '../../models/photo.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { gameSession } from '../../models/gameSession/gameSession';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbToastrService, NbToastRef } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';

import { map } from 'rxjs/operators';


@Component({
  selector: 'app-game-session',
  templateUrl: './game-session.component.html',
  styleUrls: ['./game-session.component.scss']
})
export class GameSessionComponent implements OnInit {
  user: User;
  public images: Photo[];


  public game: gameSession[];

  charname: string;

  diceRolls;

  rolls;

  gamedice;

  tester;

  constructor(
    private afs: AngularFirestore,
    public auth: AuthService,
    private db: AngularFireDatabase,
    private toastrService: NbToastrService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.charname = this.route.snapshot.paramMap.get('charname');
    this.auth.user$.subscribe(user => this.user = user);

    this.auth.user$.subscribe(user => {
      if (user) {
      
       

        this.afs.collection('groupsession', ref => ref.where('partyLeader', '==', user.uid))
        .valueChanges().pipe(
          map(res => res.map( data => new gameSession(data) ))
        ).subscribe(res => this.game = res)
      } else {
       

        this.afs.collection('groupsession', ref => ref.where('selectedMembers', '==', user.uid))
        .valueChanges().pipe(
          map(res => res.map( imgResult => new Photo(imgResult) ))
        ).subscribe(res => this.images = res);
      }
    });
    
    this.auth.diceRolls.subscribe(data => this.diceRolls = data);
    this.rolls = this.db.object('dicerolls').valueChanges().subscribe(data => this.rolls = data);
    this.gamedice = this.auth.gameDice;

    this.tester = this.afs.collection('users').valueChanges().subscribe(data => this.tester = data);

  




  }

  







}
