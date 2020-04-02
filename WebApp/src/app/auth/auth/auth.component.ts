import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    public loginForm: FormGroup;
    public submitted: boolean = false;

    constructor(
        private _router: Router,
        private _authService: AuthService,
        private formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    get form() {
        return this.loginForm.controls;
    }

    public login(): void {
        this.submitted = true;
        if (this.loginForm.valid) {
            const validTo = new Date();
            this._authService.Save({
                jeAdmin: true,
                validTo: validTo.setDate(validTo.getDate())
            });
            this._router.navigateByUrl('/admin', { replaceUrl: true });
        }
    }
}
