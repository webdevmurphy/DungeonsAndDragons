import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from "../../../services/open5e/data/data.service";
import { Background } from "../../../models/open5e/background";

@Component({
  selector: 'app-backgrounds',
  templateUrl: './backgrounds.component.html',
  styleUrls: ['./backgrounds.component.scss']
})
export class BackgroundsComponent implements OnInit {


  data: Background[];


  constructor(private DataService: DataService) { }

  ngOnInit(){
    this.DataService.getBackgrounds().subscribe((data)=> {
      this.data = data;
      console.log(this.data);
    })
  }

}
