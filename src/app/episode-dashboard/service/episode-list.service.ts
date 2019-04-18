import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodeListService {
  constructor(private _http: HttpClient) { }
  private _url = "http://api.tvmaze.com/shows" ;
  private _epiosdeurl = "http://api.tvmaze.com/seasons"

  getSLService(currseasonsodeId: number): Observable<any>{
    return this._http.get(this._url+'/'+currseasonsodeId+'/seasons');
  }

  getELService(currepisodeId: number): Observable<any>{
    return this._http.get(this._epiosdeurl+'/'+currepisodeId+'/episodes');
  }
}
