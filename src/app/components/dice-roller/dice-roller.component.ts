import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from '../../services/auth/auth.service';



@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.scss']
})
export class DiceRollerComponent implements OnInit {
gameRolls: string [];

user;

myRoll:number = 0;

  constructor(private auth: AuthService, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.auth.user$.subscribe( user => this.user = user);
    this.gameRolls = new Array<string>();
    

  }
  

  D2Roll(myRoll){
    this.myRoll = Math.floor(Math.random() * 2 + 1);
    this.db.object(`dicerolls/${this.user.uid}`).update({'d2': this.myRoll})
    this.playAudio();
    return this.myRoll;
  }

  D4Roll(myRoll){
    this.myRoll =  Math.floor(Math.random() * 4 + 1);
    this.db.object(`dicerolls/${this.user.uid}`).update({'d4': this.myRoll})
    this.playAudio();
    return this.myRoll;
  }

  D6Roll(myRoll){
    this.myRoll =  Math.floor(Math.random() * 6 + 1);
    this.db.object(`dicerolls/${this.user.uid}`).update({'d6': this.myRoll})
    this.playAudio();
    return this.myRoll;
  }

  D8Roll(myRoll){
    this.myRoll =  Math.floor(Math.random() * 8 + 1);
    this.db.object(`dicerolls/${this.user.uid}`).update({'d8': this.myRoll})
    this.playAudio();
    return this.myRoll;
  }

  D10Roll(myRoll){
    this.myRoll =  Math.floor(Math.random() * 10 + 1);
    this.db.object(`dicerolls/${this.user.uid}`).update({'d10': this.myRoll})
    this.playAudio();
    return this.myRoll;
  }

  D20Roll(myRoll){
    this.myRoll=  Math.floor(Math.random() * 20 + 1);
    this.db.object(`dicerolls/${this.user.uid}`).update({'d20': this.myRoll})
    this.playAudio();
    return this.myRoll;
  }

  D100Roll(myRoll){
     this.myRoll = Math.floor(Math.random() * 100 + 1);
     this.db.object(`dicerolls/${this.user.uid}`).update({'d100': this.myRoll})
     this.playAudio();
    return this.myRoll
  }

  reset(myRoll){
    this.myRoll = 0;
    this.db.object(`dicerolls/${this.user.uid}`).update({'d2': this.myRoll, 'd4': this.myRoll, 'd6':this.myRoll, 'd8':this.myRoll, 'd10':this.myRoll, 'd20':this.myRoll, 'd100':this.myRoll})
    this.playAudio2();
    return this.myRoll
  }
  playAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/audio/dieThrow.mp3";
    audio.load();
    audio.play();
  }

  playAudio2(){
    let audio = new Audio();
    audio.src = "../../../assets/audio/reset.wav";
    audio.load();
    audio.play();
  }

  addToArr(user: string, roll: number){
    this.gameRolls.push(this.user + this.myRoll);
  }

}
