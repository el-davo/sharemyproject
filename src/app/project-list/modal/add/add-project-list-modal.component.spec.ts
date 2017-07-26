import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectListModalComponent } from './add-project-list-modal.component';

describe('AddProjectListModalComponent', () => {
  let component: AddProjectListModalComponent;
  let fixture: ComponentFixture<AddProjectListModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectListModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
