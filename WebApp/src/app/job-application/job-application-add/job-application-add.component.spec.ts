import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationAddComponent } from './job-application-add.component';

describe('JobApplicationAddComponent', () => {
  let component: JobApplicationAddComponent;
  let fixture: ComponentFixture<JobApplicationAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobApplicationAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobApplicationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
