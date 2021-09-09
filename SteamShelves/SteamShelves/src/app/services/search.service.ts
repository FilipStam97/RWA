import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SearchObject } from '../models/searchObject';
import { errorHandler } from './errorHandler';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  getSearchResults(searchValue: string) {
    return this.httpClient.get<SearchObject[]>(`${environment.apiUrl}/apps/search/${searchValue}`).
    pipe(catchError(errorHandler));
  }
}
