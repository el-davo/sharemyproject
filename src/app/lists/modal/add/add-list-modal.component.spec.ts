import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListModalComponent } from './add-list-modal.component';

describe('AddProjectListModalComponent', () => {
  let component: AddListModalComponent;
  let fixture: ComponentFixture<AddListModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddListModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
