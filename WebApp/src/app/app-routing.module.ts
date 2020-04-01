import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';

const routes: Routes = [
    {
        path: '',
        component: AuthComponent
    },
    {
        path: 'login',
        component: AuthComponent
    },
    {
        path: 'job-application',
        loadChildren: () =>
            import('./job-application/job-application.module').then(
                m => m.JobApplicationModule
            )
    },
    {
        path: 'admin',
        redirectTo: '/job-application/applications',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
