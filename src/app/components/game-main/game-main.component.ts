import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user';
import { AngularFireDatabase} from '@angular/fire/database';
import { map, switchMap, first, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';





@Component({
  selector: 'app-game-main',
  templateUrl: './game-main.component.html',
  styleUrls: ['./game-main.component.scss']
})
export class GameMainComponent implements OnInit {

  user: User;

  diceRolls;

  rolls;
  

  constructor(private auth: AuthService, private db: AngularFireDatabase) { }


  
  ngOnInit() {
    this.auth.user$.subscribe(user => this.user = user);
    this.auth.diceRolls.subscribe(data => this.diceRolls = data);
    this.rolls = this.db.object('dicerolls').valueChanges().subscribe(data => this.rolls = data);
  }

 

}
