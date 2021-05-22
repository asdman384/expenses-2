import { NgModule, Injectable } from '@angular/core';
import { RouterModule, Routes, CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageSettingsComponent } from './page-settings/page-settings.component';
import { SecurityService } from './services/security.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private security: SecurityService, private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.security.isSignedIn) {
            return true;
        } else {
            return this.router.parseUrl('');
        }
    }
}


const routes: Routes = [{
    path: '',
    component: PageHomeComponent
}, {
    path: 'settings',
    component: PageSettingsComponent,
    canActivate: [AuthGuard]
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule { }
