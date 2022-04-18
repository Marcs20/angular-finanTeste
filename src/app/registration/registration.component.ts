import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  constructor(private _service: RegistrationService, private _router: Router) {}

  user = new User();
  msg = '';

  registerUser() {
    this._service.registerUserFromRemote(this.user).subscribe(
      (data) => {
        console.log('response received');
        this.msg = 'registration successful';
      },
      (error) => {
        console.log('exception occurred');
        this.msg = error.error;
      }
    );
  }

  ngOnInit() {}
}
