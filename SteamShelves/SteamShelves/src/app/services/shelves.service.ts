import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Shelve } from '../models/shelve';
import { errorHandler } from './errorHandler';

@Injectable({
  providedIn: 'root'
})
export class ShelvesService {

  constructor(private httpClient: HttpClient) { }

  getShelves(userID: string) {
    return this.httpClient.get<Shelve[]>(`${environment.apiUrl}/shelves/${userID}`).
    pipe(catchError(errorHandler));
  }

}

