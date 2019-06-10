import { Injectable }             from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                                 from '@angular/router';
import { Observable }             from 'rxjs';

import { AuthenticationService }  from '../_services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if(localStorage.getItem('currentUser'))
      {
        return true;
      }
      this.router.navigate(['/login']);
    }
  }
