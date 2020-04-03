import { Component, OnInit } from '@angular/core';
import { JobApplicationService } from '../shared/job-application.service';
import { JobApplication } from '../shared/job-application.model';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-job-application-list',
    templateUrl: './job-application-list.component.html',
    styleUrls: ['./job-application-list.component.scss'],
})
export class JobApplicationListComponent implements OnInit {
    public dataSource: JobApplication[];
    public page: number = 1;
    public pageSize: number = 1;
    public currentRate: number = 5;

    constructor(
        private _jobApplicationService: JobApplicationService,
        private config: NgbRatingConfig
    ) {}

    ngOnInit(): void {
        this.config.max = 5;
        this.dataSource = this._jobApplicationService.GetAll();
    }

    updateRating(application): void {
        this._jobApplicationService.Update(application);
    }
}
