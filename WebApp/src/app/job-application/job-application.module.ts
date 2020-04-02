import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { JobApplicationRoutingModule } from './job-application-routing.module';
import { JobApplicationListComponent } from './job-application-list/job-application-list.component';
import { JobApplicationNotificationComponent } from './job-application-notification/job-application-notification.component';
import { JobApplicationAddComponent } from './job-application-add/job-application-add.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        JobApplicationListComponent,
        JobApplicationNotificationComponent,
        JobApplicationAddComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        JobApplicationRoutingModule,
        NgbModule
    ],
    exports: [
        JobApplicationAddComponent,
        JobApplicationListComponent,
        JobApplicationNotificationComponent,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class JobApplicationModule {}
