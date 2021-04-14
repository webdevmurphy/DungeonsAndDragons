import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { NbToastrService, NbToastRef } from '@nebular/theme';
import { CharacterSheet } from '../../models/character/characterSheet'
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-charsheet',
  templateUrl: './charsheet.component.html',
  styleUrls: ['./charsheet.component.scss']
})
export class CharsheetComponent implements OnInit {

  user: User;
  
  model: CharacterSheet = new CharacterSheet( );
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


  position = 'top-right';
  status = 'danger';
  status1 = 'primary';
  message ="Sucessfully Created Character";
  message2: "Submission Failed"; 
  title ="Character Creation";
  
  private index: number = 0;

  
  constructor(
    private toastrService: NbToastrService,
    private storage: AngularFireStorage,
    private afs: AngularFirestore,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.user$.subscribe(data => this.user = data);
    
  }

  toggle(checked: boolean){
    this.checked = checked;
  }

  toggle1(checked: boolean){
    this.checked1 = checked;
  }

  toggle2(checked: boolean){
    this.checked2 = checked;
  }

  toggle3(checked: boolean){
    this.checked3 = checked;
  }

  toggle4(checked: boolean){
    this.checked4 = checked;
  }

  toggle5(checked: boolean){
    this.checked5 = checked;
  }

  toggle6(checked: boolean){
    this.checked6 = checked;
  }

  toggle7(checked: boolean){
    this.checked7 = checked;
  }

  toggle8(checked: boolean){
    this.checked8 = checked;
  }

  toggle9(checked: boolean){
    this.checked9 = checked;
  }

  toggle10(checked: boolean){
    this.checked10 = checked;
  }

  toggle11(checked: boolean){
    this.checked11 = checked;
  }

  toggle12(checked: boolean){
    this.checked12 = checked;
  }

  toggle13(checked: boolean){
    this.checked13 = checked;
  }

  toggle14(checked: boolean){
    this.checked14 = checked;
  }

  toggle15(checked: boolean){
    this.checked15 = checked;
  }

  toggle16(checked: boolean){
    this.checked16 = checked;
  }

  toggle17(checked: boolean){
    this.checked17 = checked;
  }

  toggle18(checked: boolean){
    this.checked18 = checked;
  }

  toggle19(checked: boolean){
    this.checked19 = checked;
  }

  toggle20(checked: boolean){
    this.checked20 = checked;
  }

  toggle21(checked: boolean){
    this.checked21 = checked;
  }

  toggle22(checked: boolean){
    this.checked22 = checked;
  }

  toggle23(checked: boolean){
    this.checked23 = checked;
  }

  toggle24(checked: boolean){
    this.checked24 = checked;
  }

  toggle25(checked: boolean){
    this.checked25 = checked;
  }

  toggle26(checked: boolean){
    this.checked26 = checked;
  }

  toggle27(checked: boolean){
    this.checked27= checked;
  }

  toggle28(checked: boolean){
    this.checked28 = checked;
  }

  toggle29(checked: boolean){
    this.checked29 = checked;
  }

  toggle30(checked: boolean){
    this.checked30 = checked;
  }

  onSubmit(form) {
    if(form){
    
    form.timestamp = `${new Date()}`;
    
    

    this.afs.collection('character').add(form);
    
 
      this.toastAlert1(this.status1, this.position);
    

    this.router.navigate(['char-list']);
  }
  }



  toastAlert(status, position){
    const toastRef: NbToastRef = this.toastrService.show(this.message2, this.title, {status: status, position: position});
  }
  toastAlert1(status, position){
    const toastRef: NbToastRef = this.toastrService.show(this.message, this.title, {status: status, position: position});
  }

}
