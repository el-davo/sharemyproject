import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProjectListModalComponent } from './delete-project-list-modal.component';

describe('DeleteProjectListModalComponent', () => {
  let component: DeleteProjectListModalComponent;
  let fixture: ComponentFixture<DeleteProjectListModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteProjectListModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProjectListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
