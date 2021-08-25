import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  //kad se stavi private automatski pravi atribut i dodeljuje mu, also kada se dodaje neka injectable service dodace instancu koja vec postoji ence da pravi nepotrebno novu instancu
  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Movie[]>(environment.apiUrl+ "movies")
    .pipe(
      catchError(errorHandler)
    )

  }

  getByID(id :number) {
    return this.httpClient.get<Movie>(`${environment.apiUrl}movies/${id}`)
    .pipe(
      catchError(errorHandler)
    )

  }
}


//bolji nacin za error handle nego da pisemo arrow funkciju direkt u catcherror jer je reusable i cleaner
const errorHandler = (error: HttpErrorResponse) => {
  const errorMsg = (error.status === 0) ?
  `Can not connect to api: ${error.error}`: 
  `Backend returned code: ${error.status}`;

  return throwError(errorMsg);
}
