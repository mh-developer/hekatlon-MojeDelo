import { Component, OnInit, OnDestroy } from '@angular/core';
import { JobApplicationService } from '../shared';
import { JobApplication } from '../shared/job-application.model';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastService, LocalStoreService } from 'src/app/shared/services';
import { AuthService } from 'src/app/auth/shared';

@Component({
    selector: 'app-job-application-list',
    templateUrl: './job-application-list.component.html',
    styleUrls: ['./job-application-list.component.scss'],
})
export class JobApplicationListComponent implements OnInit, OnDestroy {
    public dataSource: JobApplication[];
    public pages: number[] = [1, 2, 5, 10, 20];
    public page: number = 1;
    public pageSize: number = 1;
    public currentRate: number = 5;

    constructor(
        private _jobApplicationService: JobApplicationService,
        private _localStoreService: LocalStoreService,
        private _authService: AuthService,
        private config: NgbRatingConfig,
        public toastService: ToastService
    ) {}

    ngOnInit(): void {
        this.config.max = 5;
        this.dataSource = this._jobApplicationService.GetAll();
        this.pageSize = Number(
            this._localStoreService.getItem('pageSize')
                ? this._localStoreService.getItem('pageSize')
                : 1
        );
    }

    ngOnDestroy(): void {
        this._localStoreService.saveItem('pageSize', `${this.pageSize}`);
    }

    public updateRating(application): void {
        this._jobApplicationService.Update(application);
        this.toastService.show('Uspešno ste ocenili vlogo', {
            header: 'Uspešna akcija',
            classname: 'bg-success text-light',
        });
    }

    public selectPageSize(size: number): void {
        this.pageSize = size;
        this._localStoreService.saveItem('pageSize', `${this.pageSize}`);
    }

    public logOut(): void {
        this._authService.logOut();
    }
}
