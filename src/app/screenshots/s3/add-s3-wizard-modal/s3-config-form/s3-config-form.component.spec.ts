import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S3ConfigFormComponent } from './s3-config-form.component';

describe('S3ConfigFormComponent', () => {
  let component: S3ConfigFormComponent;
  let fixture: ComponentFixture<S3ConfigFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S3ConfigFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S3ConfigFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
