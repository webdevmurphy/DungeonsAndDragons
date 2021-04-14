import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of, Subscription } from 'rxjs';
import { finalize, tap, switchMap } from 'rxjs/operators';
import { User } from '../../models/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NbWindowService } from '@nebular/theme';

@Component({
  selector: 'upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.scss']
})
export class UploadTaskComponent implements OnInit {
  @ViewChild('escClose', { read: TemplateRef }) escCloseTemplate: TemplateRef<HTMLElement>;
  @ViewChild('disabledEsc', { read: TemplateRef }) disabledEscTemplate: TemplateRef<HTMLElement>;

  @Input() file: File;
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadUrl: string;

user: User;

downloadLink: string;
  constructor (
   private auth: AuthService,
    private storage: AngularFireStorage,
     private db: AngularFirestore,
     private windowService: NbWindowService) { }

  ngOnInit() {
    this.startUpload();
  }

  startUpload() {
    const path = `photos/${this.file.name}`;
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, this.file);

    // observables while uploading
    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(console.log),
      finalize( async() =>  {
        this.downloadUrl = await ref.getDownloadURL().toPromise();
        this.auth.user$.subscribe(user => {

          let uploadData = {
            downloadUrl: this.downloadUrl,
            user,
            alt: "Alternate image text"
          }
          this.db.collection(`photos`).add( uploadData );
        });
      }),
    );
  }
  
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

  openWindowWithBackdrop() {
    this.windowService.open(
      this.escCloseTemplate,
      { title: 'Window with backdrop', hasBackdrop: true },
    );
  }

  openWindowWithoutBackdrop() {
    this.windowService.open(
      this.disabledEscTemplate,
      { title: 'Window without backdrop', hasBackdrop: false, closeOnEsc: false },
    );
  }




}