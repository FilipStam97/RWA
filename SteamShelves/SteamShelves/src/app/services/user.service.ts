import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {catchError} from 'rxjs/operators';
import { User } from '../models/user';
import { errorHandler } from './errorHandler';


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


