import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable()
export class RegistrationService {
  constructor(private _http: HttpClient) {}

  public loginUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>('https://aplica1.herokuapp.com/login', user);
  }
}
