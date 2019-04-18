import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchResult: any;
  tempSearchText: string;
  constructor(private http:HttpClient) { }
  private url = "http://api.tvmaze.com/singlesearch/shows";
  
  searchSeries(searchText: string): Observable<any>{
    this.tempSearchText = String(Object.values(searchText));
    this.searchResult = this.http.get(this.url,{
       params : new HttpParams().set('q', this.tempSearchText)})
     return this.searchResult;
} 

  getSearchResult(){
    return this.searchResult;
  }
}
