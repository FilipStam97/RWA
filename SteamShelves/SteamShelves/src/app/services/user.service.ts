import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  authUser(username: string, password: string) {
    const req = {
      username: username,
      password: password
    }
    return this.httpClient.post<User>(`${environment.apiUrl}/user/auth`, req).
    pipe(catchError(errorHandler));
  }

}

const errorHandler = (error: HttpErrorResponse) => {
  const errMsg =
  error.status === 0 
    ? `Connection with the server failed ${error.error}`
    : `Server returned an error ${error.status}`;

  return throwError(errMsg);
  
}
