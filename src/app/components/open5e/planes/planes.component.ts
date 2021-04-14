import { Component, OnInit } from '@angular/core';
import { DataService } from "../../../services/open5e/data/data.service";
import { Planes } from "../../../models/open5e/planes";

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss']
})
export class PlanesComponent implements OnInit {
  data: Planes[];
  constructor(private DataService: DataService) { }

  ngOnInit(){
    this.DataService.getPlanes().subscribe((data)=>{
      this.data = data;
      console.log(this.data);
    })
  }

}
