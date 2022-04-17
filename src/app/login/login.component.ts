import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private _service: RegistrationService) {}

  user = new User();

  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
      data => console.log("response received"),
      error => console.log("exception occured")
    );
  }

  ngOnInit() {}
}
