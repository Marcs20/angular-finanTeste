import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationService } from '../service/registration.service';

@Injectable()
export class AuthGdGuard implements CanActivate {

  constructor(private auth: RegistrationService, private router: Router){}

  canActivate( rout: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if(this.auth.authTrue()){
      return true;
    }
    this.router.navigate(['/'])
  }
}
