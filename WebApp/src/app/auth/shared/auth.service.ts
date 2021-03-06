import { LocalStoreService } from '../../shared/services';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(
        private _router: Router,
        private _localStoreService: LocalStoreService
    ) {}

    public IsValid(): boolean {
        const dateNow = new Date().getDate();
        const jeAdmin = JSON.parse(this._localStoreService.getItem('jeAdmin'));
        if (jeAdmin) {
            if (jeAdmin.jeAdmin && jeAdmin.validTo > dateNow) {
                this._router.navigateByUrl('/admin', { replaceUrl: true });
                return false;
            }
        }
        return true;
    }

    public IsInvalid(): boolean {
        const dateNow = new Date().getDate();
        const jeAdmin = JSON.parse(this._localStoreService.getItem('jeAdmin'));
        if (jeAdmin) {
            if (jeAdmin.jeAdmin && jeAdmin.validTo > dateNow) {
                return true;
            }
        }
        this._router.navigateByUrl('/login', { replaceUrl: true });
        return false;
    }

    public save(data): void {
        if (!data) {
            return;
        }

        this._localStoreService.saveItem('jeAdmin', JSON.stringify(data));
    }

    public logOut(): void {
        this._localStoreService.removeItem('jeAdmin');
        this._router.navigateByUrl('/login', { replaceUrl: true });
    }
}
