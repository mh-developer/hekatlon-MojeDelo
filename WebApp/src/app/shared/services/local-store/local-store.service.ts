import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStoreService {
    public getItem(key: string): string {
        return localStorage.getItem(key);
    }

    public saveItem(key: string, value: string): void {
        localStorage.setItem(key, value);
    }

    public removeItem(key: string): void {
        localStorage.removeItem(key);
    }
}
