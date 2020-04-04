import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as fromJobApplication from '.';
import { JobApplicationRoutingModule } from './job-application-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { TippyModule } from 'ng-tippy';

@NgModule({
    declarations: [
        fromJobApplication.JobApplicationListComponent,
        fromJobApplication.JobApplicationNotificationComponent,
        fromJobApplication.JobApplicationAddComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        JobApplicationRoutingModule,
        NgbModule,
        SharedModule,
        TippyModule,
    ],
    exports: [
        fromJobApplication.JobApplicationAddComponent,
        fromJobApplication.JobApplicationListComponent,
        fromJobApplication.JobApplicationNotificationComponent,
        FormsModule,
        ReactiveFormsModule,
    ],
})
export class JobApplicationModule {}
