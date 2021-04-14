import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import images from '../../../assets/data/home-images.json';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  flipped: boolean = false;



  constructor() { }


  public images: Photo[] = images;



  ngOnInit() {
  }


  toggleView() {
    this.flipped = !this.flipped;
    }


}
