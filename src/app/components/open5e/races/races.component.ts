import { Component, OnInit } from '@angular/core';
import { DataService } from "../../../services/open5e/data/data.service";
import { Races } from "../../../models/open5e/races";

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss']
})
export class RacesComponent implements OnInit {
  data:Races[];
  constructor(private DataService: DataService) { }

  ngOnInit(){
    this.DataService.getRaces().subscribe((data)=>{
      this.data = data;
      console.log(this.data);
    })
  }

}
