import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdListRightIconButtonComponent } from './md-list-right-icon-button.component';

describe('MdListRightIconButtonComponent', () => {
  let component: MdListRightIconButtonComponent;
  let fixture: ComponentFixture<MdListRightIconButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdListRightIconButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdListRightIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
