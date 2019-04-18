import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-new-watchlist',
  templateUrl: './new-watchlist.component.html',
  styleUrls: ['./new-watchlist.component.css']
})
export class NewWatchlistComponent implements OnInit {
  showcurrent: boolean = false;
  currentid: number;
  @Output() currentWatch = new EventEmitter<boolean>();
  @ViewChild('st') searchText: HTMLInputElement;
  constructor(private _searchService : SearchService) { }
  SearchResult: any;
  @Output() SearchedResult = new EventEmitter<number>();
  ngOnInit() {}

  newWatchlist(){
    this.currentWatch.emit(this.showcurrent);
    this.SearchedResult.emit(this.SearchResult);
  }

  Search(){
    //console.log(this.searchText.value);
    this._searchService.searchSeries(this.searchText.value)
      //data => this.currentid = data.id  
      .subscribe(
    data => this.SearchResult = data,
    err => console.log(err)
    );
  }

}
