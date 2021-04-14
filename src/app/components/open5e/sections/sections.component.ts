import { Component, OnInit } from '@angular/core';
import { DataService } from "../../../services/open5e/data/data.service";
import { Sections } from "../../../models/open5e/sections";

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {
  data: Sections[];
  constructor(private DataService: DataService) { }

  ngOnInit() {
    this.DataService.getSections().subscribe((data)=>{
      this.data = data;
      console.log(this.data);
    })
  }

}
