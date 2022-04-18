import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable()
export class RegistrationService {
  constructor(private _http: HttpClient, private _router: Router) {}

  public loginUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>('https://aplica1.herokuapp.com/login', user);
  }

  showNavBar = new EventEmitter<boolean>();

  user = new User();
  msg = '';

  loginUser() {
    this.loginUserFromRemote(this.user).subscribe(
      (data) => {
        console.log('received');
        this.showNavBar.emit(true);
        this._router.navigate(['/home']);
      },
      (error) => {
        console.log('exception');
        this.showNavBar.emit(false);
        this.msg = 'bad credentials';
      }
    );
  }

  public registerUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>(
      'https://aplica1.herokuapp.com/registeruser',
      user
    );
  }
}
