import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S3VerificationFormComponent } from './s3-verification-form.component';

describe('S3VerificationFormComponent', () => {
  let component: S3VerificationFormComponent;
  let fixture: ComponentFixture<S3VerificationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S3VerificationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S3VerificationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
