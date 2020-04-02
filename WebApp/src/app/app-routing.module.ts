import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { NoAuthGuard } from './core/guards/no-auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/new',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: AuthComponent,
        canActivate: [NoAuthGuard]
    },
    {
        path: '',
        loadChildren: () =>
            import('./job-application/job-application.module').then(
                m => m.JobApplicationModule
            )
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
