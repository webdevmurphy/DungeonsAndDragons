import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NbSidebarService, NbMenuItem } from '@nebular/theme';
import { AuthService } from './services/auth/auth.service';
import { NbWindowService } from '@nebular/theme';
import { DiceRollerComponent } from '../app/components/dice-roller/dice-roller.component';
import { User } from '../app/models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ddproj';

  user: User;

 

 public isDungeonMaster: boolean = true;
  
constructor(
  private sidebarService: NbSidebarService, 
  public auth: AuthService,
  private windowService: NbWindowService){

  

}


 ngOnInit(){
  this.auth.user$.subscribe((user) => {
    this.user = user;
    /* user.uid => user id */
   // this.userID = this.user.isDungeonMaster;
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

toggle() {
  //set false to make menu disappear
  this.sidebarService.toggle(true, 'left');
}

toggleCompact() {
  this.sidebarService.toggle(false, 'right');
}

items: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    link:'home',
  },
  {
    title: 'Account',
    icon: 'shield-outline',
    expanded: true,
    children: [
      {
        title: 'My Profile',
        icon: 'person-outline',
        link:'profile',
      },
      {
        title: 'Files',
        icon: 'folder-outline',
        link: 'viewuploads'
      },
      {
        title: 'File Uploads',
        icon: 'folder-outline',
        link: 'uploader'
      },
      {
        title: 'Create Character Sheet',
        icon: 'file-add-outline',
        link: 'charsheet',
      },
      {
        title: 'View Character Sheets',
        icon: 'folder-outline',
        link: 'char-list'
      },


    ],
  },
  
  {
    title: 'Game',
    icon: 'activity-outline',
    expanded: true,
    children: [
    
      {
        title: 'Create Party',
        icon: 'person-outline',
        link: 'create-party'
      },
      {
        title: 'Join Party',
        icon: 'person-outline',
        link: 'join-party'
      },
      {
        title: 'Rule Book',
        icon: 'book-outline',
        expanded: true,
        children:[
          {
            title: 'backgrounds',
            icon: 'book-open-outline',
            link: 'backgrounds',
          },
          {
            title: 'classes',
            icon: 'book-open-outline',
            link: 'classes'
          },
          {
            title: 'conditions',
            icon: 'book-open-outline',
            link: 'conditions'
          },
          {
            title: 'feats',
            icon: 'book-open-outline',
            link: 'feats'
          },
          {
            title: 'magic items',
            icon: 'book-open-outline',
            link: 'magicitems'
          },
          {
            title: 'monsters',
            icon: 'book-open-outline',
            link: 'monsters'
          },
          {
            title: 'planes',
            icon: 'book-open-outline',
            link: 'planes'
          },
          {
            title: 'races',
            icon: 'book-open-outline',
            link: 'races'
          },
          {
            title: 'sections',
            icon: 'book-open-outline',
            link: 'sections'
          },
          {
          title:'spells',
          icon: 'book-open-outline',
          link: 'spellbook',
          },
          {
            title: 'weapons',
            icon: 'book-open-outline',
            link: 'weapons'
          }
        ]
      },
    ],
  },
];




}
