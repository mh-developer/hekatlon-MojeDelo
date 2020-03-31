import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    public username: string;
    public password: string;
    public showSpinner: boolean = false;

    constructor(private _router: Router, private _authService: AuthService) {}

    ngOnInit(): void {}

    login(): void {
        this.showSpinner = true;
        if (this.username !== '' && this.password !== '') {
            this._authService.Save(true);
            this.showSpinner = false;
            this._router.navigateByUrl('/admin', { replaceUrl: true });
        } else {
            this.showSpinner = false;
            console.log('Inputs not valid.');
        }
    }
}
