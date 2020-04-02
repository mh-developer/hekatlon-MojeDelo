import { LocalStoreService } from './../../shared/services/local-store.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private _localStoreService: LocalStoreService) {}

    public Save(data): void {
        if (!data) {
            return;
        }

        this._localStoreService.saveItem('jeAdmin', JSON.stringify(data));
    }
}
