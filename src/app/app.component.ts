import { Component, VERSION } from '@angular/core';
import { RegistrationService } from './service/registration.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private _service: RegistrationService) {}

  show: boolean = false;

  ngOnInit() {
    this._service.showNavBar.subscribe((data) => (this.show = data));
  }
}
