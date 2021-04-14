import { Component, OnInit } from '@angular/core';
import { DataService } from "../../../services/open5e/data/data.service";
import { Classes } from "../../../models/open5e/classes";

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  data:Classes[];
  constructor(private DataService: DataService) { }

  ngOnInit() {
    this.DataService.getClasses().subscribe((data)=>{
      this.data = data;
      console.log(this.data);
    })
  }

}
