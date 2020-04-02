import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthModule } from './auth';
import { JobApplicationModule } from './job-application/job-application.module';
import { AuthComponent } from './auth/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [AppComponent, AuthComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        AuthModule,
        FormsModule,
        ReactiveFormsModule,
        JobApplicationModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
