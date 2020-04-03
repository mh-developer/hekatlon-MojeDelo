import { Injectable } from '@angular/core';
import { LocalStoreService } from 'src/app/shared/services';
import { JobApplication } from './job-application.model';

@Injectable({
    providedIn: 'root',
})
export class JobApplicationService {
    constructor(private _localStoreService: LocalStoreService) {}

    public GetAll(): JobApplication[] {
        const items = this._localStoreService.getItem('jobApplications');
        if (items) {
            const applications: JobApplication[] = JSON.parse(items);
            return applications;
        }
        return [];
    }

    public Save(jobApplication: JobApplication): void {
        const items = this._localStoreService.getItem('jobApplications');
        jobApplication.Id = new Date();
        jobApplication.Rating = 0;
        if (items) {
            const applications: JobApplication[] = JSON.parse(items);

            this._localStoreService.saveItem(
                'jobApplications',
                JSON.stringify([...applications, jobApplication])
            );
        } else {
            this._localStoreService.saveItem(
                'jobApplications',
                JSON.stringify([jobApplication])
            );
        }
    }

    public Update(jobApplication: JobApplication): JobApplication {
        const items = this._localStoreService.getItem('jobApplications');
        if (items) {
            const applications: JobApplication[] = JSON.parse(items);
            const update = applications.map((x) =>
                x.Id === jobApplication.Id ? { ...x, ...jobApplication } : x
            );
            this._localStoreService.saveItem(
                'jobApplications',
                JSON.stringify(update)
            );
            return update.find((x) => x.Id === jobApplication.Id);
        }
    }
}
