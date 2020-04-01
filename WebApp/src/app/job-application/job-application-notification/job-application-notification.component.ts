import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-job-application-notification',
    templateUrl: './job-application-notification.component.html',
    styleUrls: ['./job-application-notification.component.scss']
})
export class JobApplicationNotificationComponent implements OnInit {
    constructor(private _router: Router) {}

    ngOnInit(): void {}

    public goToLogin(): void {
        this._router.navigateByUrl('/login', { replaceUrl: true });
    }
}
