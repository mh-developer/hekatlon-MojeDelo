import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/shared';

@Injectable({
    providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
    constructor(private _authService: AuthService) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        return this._authService.IsValid();
    }
}
