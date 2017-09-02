import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddS3WizardModalComponent } from './add-s3-wizard-modal.component';

describe('AddS3WizardModalComponent', () => {
  let component: AddS3WizardModalComponent;
  let fixture: ComponentFixture<AddS3WizardModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddS3WizardModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddS3WizardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
