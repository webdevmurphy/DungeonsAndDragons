import { Component, OnInit } from '@angular/core';
import { DataService } from "../../../services/open5e/data/data.service";
import { Conditions } from "../../../models/open5e/conditions";

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.scss']
})
export class ConditionsComponent implements OnInit {
  data:Conditions[];
  constructor(private DataService: DataService) { }

  ngOnInit() {
    this.DataService.getConditions().subscribe((data)=> {
      this.data= data;
      console.log(this.data);
    })
  }

}
