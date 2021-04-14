import { Component, OnInit, Input } from '@angular/core';
import { Photo } from "../../models/photo.model";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() images: Photo[];
  
  constructor() { }

  ngOnInit() {
  }

}
