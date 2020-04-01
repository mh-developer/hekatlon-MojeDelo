import { Component, OnInit } from '@angular/core';
import { LocalStoreService } from 'src/app/shared/services';
import { JobApplicationService } from '../shared/job-application.service';
import { JobApplication } from '../shared/job-application.model';

@Component({
    selector: 'app-job-application-list',
    templateUrl: './job-application-list.component.html',
    styleUrls: ['./job-application-list.component.scss']
})
export class JobApplicationListComponent implements OnInit {
    public dataSource: JobApplication[];

    constructor(private _jobApplicationService: JobApplicationService) {}

    ngOnInit(): void {
        this.dataSource = this._jobApplicationService.GetAll();
    }
}
