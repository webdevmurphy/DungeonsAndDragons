import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  title: string;
  context: string;
    constructor(private dialogService:NbDialogService) { }

  ngOnInit(): void {
  }

}
