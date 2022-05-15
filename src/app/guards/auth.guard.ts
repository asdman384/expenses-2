import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { SecurityService } from '../services/security.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private security: SecurityService, private router: Router) {}

  canActivate(): boolean | UrlTree {
    if (this.security.isSignedIn) return true;

    return this.router.createUrlTree(['']);
  }
}
