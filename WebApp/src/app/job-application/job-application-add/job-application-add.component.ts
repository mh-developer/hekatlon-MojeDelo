import { Component, OnInit } from '@angular/core';
import { JobApplication } from '../shared';
import { Router } from '@angular/router';
import { JobApplicationService } from '../shared';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-job-application-add',
    templateUrl: './job-application-add.component.html',
    styleUrls: ['./job-application-add.component.scss'],
})
export class JobApplicationAddComponent implements OnInit {
    public jobApplicationForm: FormGroup;
    public submitted: boolean = false;

    constructor(
        private _jobApplicationService: JobApplicationService,
        private _router: Router,
        private formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {
        this.jobApplicationForm = this.formBuilder.group({
            FirstName: ['', Validators.required],
            LastName: ['', Validators.required],
            Address: ['', Validators.required],
            Description: ['', Validators.required],
        });
    }

    get form() {
        return this.jobApplicationForm.controls;
    }

    submit(): void {
        this.submitted = true;
        if (this.jobApplicationForm.valid) {
            this._jobApplicationService.Save(
                this.jobApplicationForm.value as JobApplication
            );

            this._router.navigateByUrl('/notification', {
                replaceUrl: true,
            });
        }
    }

    public goToLogin(): void {
        this._router.navigateByUrl('/login', { replaceUrl: true });
    }
}
