import { LocalStoreService } from './../../shared/services/local-store.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private _localStoreService: LocalStoreService) {}

    public Save(isAdmin: boolean): void {
        if (isAdmin !== false) {
            return;
        }

        this._localStoreService.saveItem('isAdmin', JSON.stringify(isAdmin));
    }
}
