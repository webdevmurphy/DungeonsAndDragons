import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/open5e/data/data.service";
import { SearchResults } from "../../models/open5e/search-results";
import { Router, ActivatedRoute, Params } from '@angular/router';




@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  data: SearchResults[];
  value = '';
  
  constructor( private route: ActivatedRoute, private DataService: DataService ) {}

  ngOnInit()  {
    this.value = this.route.snapshot.paramMap.get('value');
    this.DataService.getSearchResults(this.value).subscribe((data)=>{
      this.data = data;
      console.log(this.data);
    })
  }




}

function MyReload(){
  if(location.search.indexOf('r') < 0){
    var hash = window.location.hash;
    var loc = window.location.href.replace(hash, '');
    loc += (loc.indexOf('?') < 0? '?' : '&') + 'r';
    setTimeout(function(){window.location.href = loc + hash;}, 2000);
}
}
