import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-view-files',
  templateUrl: './view-files.component.html',
  styleUrls: ['./view-files.component.scss']
})
export class ViewFilesComponent implements OnInit {

  @Input() images: Photo[];
  constructor() { }

  ngOnInit() {
  }

}
