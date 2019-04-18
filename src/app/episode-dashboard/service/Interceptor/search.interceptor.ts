import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SearchService } from '../search.service';


@Injectable()
export class SearchInterceptor implements HttpInterceptor{
    constructor(private _searchService: SearchService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //const clonereq = req.clone({params:req.params.set('q', this._searchService.getSearchText())
        //.set('embed','episodes')});
        return next.handle(req);
    }
}