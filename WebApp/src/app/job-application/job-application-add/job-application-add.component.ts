import { Component, OnInit } from '@angular/core';
import { LocalStoreService } from 'src/app/shared/services';
import { JobApplication } from '../shared/job-application.model';

@Component({
    selector: 'app-job-application-add',
    templateUrl: './job-application-add.component.html',
    styleUrls: ['./job-application-add.component.scss']
})
export class JobApplicationAddComponent implements OnInit {
    public jobApplication: JobApplication = new JobApplication();

    constructor(private _localStoreService: LocalStoreService) {}

    ngOnInit(): void {}

    submit(): void {
        let date = `${new Date()}`;
        this._localStoreService.saveItem(
            date,
            JSON.stringify(this.jobApplication)
        );
        console.log(this._localStoreService.getItem(date), this.jobApplication);
    }
}
