import { Component, OnInit } from '@angular/core';
import { JobApplication } from '../shared/job-application.model';
import { Router } from '@angular/router';
import { JobApplicationService } from '../shared/job-application.service';

@Component({
    selector: 'app-job-application-add',
    templateUrl: './job-application-add.component.html',
    styleUrls: ['./job-application-add.component.scss']
})
export class JobApplicationAddComponent implements OnInit {
    public jobApplication: JobApplication = new JobApplication();

    constructor(
        private _jobApplicationService: JobApplicationService,
        private _router: Router
    ) {}

    ngOnInit(): void {}

    submit(): void {
        this._jobApplicationService.Save(this.jobApplication);

        this._router.navigateByUrl('/job-application/notification', {
            replaceUrl: true
        });
    }

    public goToLogin(): void {
        this._router.navigateByUrl('/login', { replaceUrl: true });
    }
}
