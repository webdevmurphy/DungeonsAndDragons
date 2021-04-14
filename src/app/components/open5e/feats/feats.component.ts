import { Component, OnInit } from '@angular/core';
import { DataService } from "../../../services/open5e/data/data.service";
import { Feats } from "../../../models/open5e/feats";
import { Data } from '@angular/router';

@Component({
  selector: 'app-feats',
  templateUrl: './feats.component.html',
  styleUrls: ['./feats.component.scss']
})
export class FeatsComponent implements OnInit {
  data: Feats[]
  constructor( private DataService: DataService) { }

  ngOnInit() {
    this.DataService.getFeats().subscribe((data)=>{
      this.data = data;
      console.log(this.data);
    })
  }

}
