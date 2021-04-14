import { Component, OnInit } from '@angular/core';
import { DataService } from "../../../../services/open5e/data/data.service";
import { Spell } from "../../../../models/open5e/spell";


@Component({
  selector: 'app-spellbook',
  templateUrl: './spellbook.component.html',
  styleUrls: ['./spellbook.component.scss']
})
export class SpellbookComponent implements OnInit {

  data: Spell[];



  constructor(private DataService: DataService) {
   
   
   }

  ngOnInit() {
    this.DataService.getSpells().subscribe((data)=> {
      this.data = data;
      console.log(this.data);
    })
  }


 




}
