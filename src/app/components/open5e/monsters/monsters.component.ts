import { Component, OnInit } from '@angular/core';
import { DataService } from "../../../services/open5e/data/data.service";
import { Monsters } from "../../../models/open5e/monsters";

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.scss']
})
export class MonstersComponent implements OnInit {
  data: Monsters[];
  constructor(private DataService: DataService) { }

  ngOnInit() {
    this.DataService.getMonsters().subscribe((data)=>{
      this.data=data;
      console.log(this.data);
    })
  }

}
