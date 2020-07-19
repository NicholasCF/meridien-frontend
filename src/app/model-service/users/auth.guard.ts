import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.loginService.currentUserValue;

    if (currentUser) {
        return true;
    }

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
