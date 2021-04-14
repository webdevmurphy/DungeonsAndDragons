import { Component, OnInit } from '@angular/core';
import { NbSearchService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  value = '';
  constructor( private searchService: NbSearchService, private router: Router) { 

    this.searchService.onSearchSubmit()
    .subscribe((data: any) => {
      this.value = data.term;
      this.getSearchResults();
    });
  }

  ngOnInit(): void {

  }


 getSearchResults(){
  this.router.navigate(['search-results/' + this.value]);
 }
   

}
