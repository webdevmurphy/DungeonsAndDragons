import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase} from '@angular/fire/database';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user';


@Injectable({
  providedIn: 'root'
})
export class DiceService {





  user: User;

  myRoll:number = 0;

  constructor(private db: AngularFireDatabase, private auth: AuthService) { }


  D2Roll(myRoll){
    this.myRoll = Math.floor(Math.random() * 2 + 1);
    this.db.object(`dicerolls/${this.user.uid}`).update({'d2': this.myRoll})
    this.playAudio();
    return this.myRoll;
  }

  D4Roll(myRoll){
    this.myRoll =  Math.floor(Math.random() * 4 + 1);
    this.db.object(`dicerolls/${this.user.uid}`).update({'d2': this.myRoll})
    this.playAudio();
    return this.myRoll;
  }

  D6Roll(myRoll){
    this.myRoll =  Math.floor(Math.random() * 6 + 1);
    this.db.object(`dicerolls/${this.user.uid}`).update({'d2': this.myRoll})
    this.playAudio();
    return this.myRoll;
  }

  D8Roll(myRoll){
    this.myRoll =  Math.floor(Math.random() * 8 + 1);
    this.db.object(`dicerolls/${this.user.uid}`).update({'d2': this.myRoll})
    this.playAudio();
    return this.myRoll;
  }

  D10Roll(myRoll){
    this.myRoll =  Math.floor(Math.random() * 10 + 1);
    this.db.object(`dicerolls/${this.user.uid}`).update({'d2': this.myRoll})
    this.playAudio();
    return this.myRoll;
  }

  D20Roll(myRoll){
    this.myRoll=  Math.floor(Math.random() * 20 + 1);
    this.db.object(`dicerolls/${this.user.uid}`).update({'d2': this.myRoll})
    this.playAudio();
    return this.myRoll;
  }

  D100Roll(myRoll){
     this.myRoll = Math.floor(Math.random() * 100 + 1);
     this.db.object(`dicerolls/${this.user.uid}`).update({'d2': this.myRoll})
     this.playAudio();
    return this.myRoll
  }

  reset(myRoll){
    this.myRoll = 0;
    this.db.object(`dicerolls/${this.user.uid}`).update({'d100': this.myRoll, 'd10': this.myRoll, 'd2': this.myRoll, 'd20': this.myRoll, 'd4': this.myRoll, 'd6': this.myRoll, 'd8': this.myRoll})
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


  

}
