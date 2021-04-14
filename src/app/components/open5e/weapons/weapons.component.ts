import { Component, OnInit } from '@angular/core';
import { DataService } from "../../../services/open5e/data/data.service";
import { Weapons } from "../../../models/open5e/weapons";


@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss']
})
export class WeaponsComponent implements OnInit {
  data: Weapons[];
  constructor(private DataService: DataService) { }

  ngOnInit() {
    this.DataService.getWeapons().subscribe((data)=>{
      this.data = data;
      console.log(this.data);
    })
  }

}
