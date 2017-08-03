import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLinkModalComponent } from './delete-link-modal.component';

describe('DeleteProjectModalComponent', () => {
  let component: DeleteLinkModalComponent;
  let fixture: ComponentFixture<DeleteLinkModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteLinkModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLinkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
