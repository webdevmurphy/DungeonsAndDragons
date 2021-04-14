import { Component, OnInit } from '@angular/core';
import { DataService } from "../../../services/open5e/data/data.service";
import { Magicitems } from "../../../models/open5e/magicitems";


@Component({
  selector: 'app-magicitems',
  templateUrl: './magicitems.component.html',
  styleUrls: ['./magicitems.component.scss']
})
export class MagicitemsComponent implements OnInit {
  data: Magicitems[];
  constructor(private DataService: DataService) { }

  ngOnInit() {
    this.DataService.getMagicItems().subscribe((data)=>{
      this.data = data;
      console.log(this.data);
    })
  }

}
