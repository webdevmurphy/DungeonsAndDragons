import { Injectable } from '@angular/core';
import { Registration } from '../../models/registration/register';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { Observable, of } from "rxjs";
import { AngularFirestoreDocument, AngularFirestore} from '@angular/fire/firestore';
import { AngularFireDatabase, snapshotChanges } from '@angular/fire/database';
import { map, switchMap } from 'rxjs/operators';
import { User } from '../../models/user';
import { AngularFireStorage } from '@angular/fire/storage';
import { of as observableOf } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegUsersService {

  constructor(private regUser: Registration) { }
}
