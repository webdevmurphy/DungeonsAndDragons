import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { NbToastrService, NbToastRef } from '@nebular/theme';
import { AuthService } from '../../services/auth/auth.service';
import { User } from 'src/app/models/user';
import { Registration } from '../../models/registration/register';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
model: Registration = new Registration;

user: User;

userID: string;

  position = 'top-right';
  status = 'danger';
  status1 = 'primary';
  message ="Sucessfully Registered";
  message1 ='Registration Failed';
  title ="Registration";

private index: number = 0;

private message2: string ="Registration Failed"; 
checked = false;
checked1 = false;
checked2 = false;
checked3 = false;

  constructor(
    private toastrService: NbToastrService,
    private auth: AuthService,
    private afs: AngularFirestore,
    private db: AngularFireDatabase,
    private router: Router,
  ) { 
  
  
  }

  ngOnInit() {
    this.auth.user$.subscribe((user) => {
      this.user = user;
      this.userID = this.user.uid; 
      console.log('ng init value: ' + this.user.uid);
    })
  }

 
  onSubmit(regform) {
    if(this.model.firstName == null || this.model.firstName == ""){
        console.log("invalid name");
      
    }else{
    regform.timestamp = `${new Date()}`;
    
   // regform.uid = this.userID;
    this.saveBackend(this.userID);
    //create firestore realtime database isAdmin/isDungeonMaster
   // const itemRef = this.db.object(this.userID);
    //itemRef.set(this.model.dungeonMaster);
   
    //save the document to cloud firestore, use id as identifier.
     this.afs.collection('registration').doc(this.userID).set(regform);
  


  // this.save();

    this.router.navigate(['home']);
    }
  }


  saveBackend(userID){
    const itemRef = this.db.object(userID);
    itemRef.update({isDungeonMaster: this.model.dungeonMaster});
  }


  showToast() {
     if(this.model.firstName == null || this.model.firstName == ""){
      this.toastAlert(this.status, this.position);
     }else{
      this.toastAlert1(this.status1, this.position);
     } 
  }

  toggle(checked: boolean){
    this.checked = checked;
  }

  toggle1(checked1: boolean){
    this.checked1 = checked1;
    
  }

  toggle2(checked2: boolean){
    this.checked2 = checked2;
  }
  toggle3(checked3: boolean){
    this.checked3 = checked3;
  }

  toastAlert(status, position){
    const toastRef: NbToastRef = this.toastrService.show(this.message1, this.title, {status: status, position: position});
  }
  toastAlert1(status, position){
    const toastRef: NbToastRef = this.toastrService.show(this.message, this.title, {status: status, position: position});
  }


}
