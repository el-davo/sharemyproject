import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLinkModalComponent } from './add-link-modal.component';

describe('AddProjectModalComponent', () => {
  let component: AddLinkModalComponent;
  let fixture: ComponentFixture<AddLinkModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLinkModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLinkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
