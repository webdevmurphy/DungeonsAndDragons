import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { NbWindowService } from '@nebular/theme';
import { User } from '../../models/user';
import { DiceRollerComponent } from "../dice-roller/dice-roller.component";

@Component({
  selector: 'app-gamepanel',
  templateUrl: './gamepanel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./gamepanel.component.scss']
})
export class GamepanelComponent implements OnInit {

  user: User;


  constructor(  public auth: AuthService,
    private windowService: NbWindowService) { }

    ngOnInit(){
      this.auth.user$.subscribe((user) => {
        this.user = user;
        
  })
}

openWindow() {
  this.windowService.open(DiceRollerComponent), {title: 'Dice Roll'};
  this.playAudio();
}


playAudio(){
  let audio = new Audio();
  audio.src = "../../../assets/audio/openMe.wav";
  audio.load();
  audio.play();
}


}
