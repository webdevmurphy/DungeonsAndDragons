import { Component} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { firestore } from 'firebase';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user';
import { NbToastrService, NbToastRef } from '@nebular/theme';





@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})




export class ChatComponent {
  title: string = "Chat";
  content: string;
  author = "your name here";

  user: User;
  
  position = 'top-right';
  status = 'control';
  message ="new chat message";
 
 

 base64image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAG1BMVEVEeef///+4zPaKq/ChvPPn7' +
    'vxymu3Q3flbieqI1HvuAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAQUlEQVQ4jWNgGAWjgP6ASdncAEaiAhaGiACmFhCJLsMaIiDAEQEi0WXYEiMC' +
    'OCJAJIY9KuYGTC0gknpuHwXDGwAA5fsIZw0iYWYAAAAASUVORK5CYII='

    heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
   

  online:Observable<any[]>
 // postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<any[]>;

  arrived;
  
  index = 0;
  constructor(private afs: AngularFirestore, public auth: AuthService, private toastrService: NbToastrService,) {
   
  }

  ngOnInit() {
    this.online = this.afs.collection('online', ref => ref.orderBy('name', 'desc').limit(25)).valueChanges();
    this.posts = this.afs.collection('posts', ref => ref.orderBy('timeStamp', 'desc').limit(3)).valueChanges();
    this.auth.user$.subscribe(user => this.user = user);
    //play audio on away
   //  this.arrived = this.afs.collection('online', ref => ref.orderBy('name', 'desc').limit(25)).valueChanges().subscribe(data => this.playAudio2(data));
    this.afs.collection('posts', ref => ref.orderBy('timeStamp', 'desc').limit(25)).valueChanges().subscribe(data => {
      this.playAudio(data);
      this.showToast(data);
    });
    
  }
     
     // this.userID = this.user.isDungeonMaster;

  
  addPost() {
    this.afs.collection('posts').add({
    'timeStamp': firestore.Timestamp.now(),
    'title': this.user.displayName,
    'author': this.author, 
    'content': this.content});
     this.sendMessage();
  }
  
  sendMessage() {
    // After Sending Message
   this.title ='';
   this.content= '';
  }

  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
      this.addPost();
    }
  }

  playAudio(audioinc){
    console.log(this.index + " this is index");
    this.index++;
    if(audioinc && this.index >= 1){
    let audio = new Audio();
    audio.src = "../../../assets/audio/mssgIn4.mp3";
    audio.load();
    audio.play();
  }
  }
  
  playAudio2(audioinc){
    this.index++;
    if(audioinc && this.index >= 1){
    let audio = new Audio();
    audio.src = "../../../assets/audio/welcomeuser.mp3";
    audio.load();
    audio.play();
  }
  }






  showToast(data) {
    if(data){
     this.toastAlert1(this.status, this.position);
    }
 }
 
toastAlert1(status, position){
  const toastRef: NbToastRef = this.toastrService.show(this.title, this.message, {status: status, position: position});
}

}
