import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationNotificationComponent } from './job-application-notification.component';

describe('JobApplicationNotificationComponent', () => {
  let component: JobApplicationNotificationComponent;
  let fixture: ComponentFixture<JobApplicationNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobApplicationNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobApplicationNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
