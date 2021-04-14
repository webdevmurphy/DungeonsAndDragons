import { Component, OnInit, Input } from '@angular/core';
import {AuthService } from '../../services/auth/auth.service';
import {User } from '../../models/user';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.scss']
})
export class UserStatusComponent implements OnInit {
  

@Input() uid;

 user$;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.user$ = this.auth.getPresence(this.uid);
  }

}
