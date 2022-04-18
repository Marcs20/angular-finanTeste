import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private _service: RegistrationService, private _router: Router) {}

  user = new User();

  msg = '';

  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
      (data) => {
        console.log('received');
        this._router.navigate(['/home']);
      },
      (error) => {
        console.log('exception');
        this.msg = 'bad credentials';
      }
    );
  }

  ngOnInit() {}
}
