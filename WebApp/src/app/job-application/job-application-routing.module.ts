import { AuthGuard } from './../core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobApplicationAddComponent } from './job-application-add/job-application-add.component';
import { JobApplicationListComponent } from './job-application-list/job-application-list.component';
import { JobApplicationNotificationComponent } from './job-application-notification/job-application-notification.component';

const routes: Routes = [
    {
        path: 'new',
        component: JobApplicationAddComponent
    },
    {
        path: 'admin',
        component: JobApplicationListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'notification',
        component: JobApplicationNotificationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JobApplicationRoutingModule {}
