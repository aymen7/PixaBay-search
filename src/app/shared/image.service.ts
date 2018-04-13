/**
 * Created by Aymen Bennour on 03/04/2018.
 */
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable'; // we need to import this to be able to use the .map() on the observable
import {SearchResult} from '../search result/search-result.model';
@Injectable ()
export class ImageService {
  private query: string;
  private API_KEY: string = environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;
  // the url that we gonna passe to pixabay
  private url: string = this.API_URL + this.API_KEY + '&q=';

  constructor(private _http: Http) {
  }

  getImage(query: string, per_page): Observable<SearchResult> {
    return this._http.get(this.url + query + '&' + per_page)
      .map((res: Response) => {
        return (<any> res.json()).hits.map(hit => {
          return new SearchResult({
            id: hit.id,
            pageURL: hit.pageURL,
            previewURL: hit.previewURL
          });
        });
      });
  }
}
