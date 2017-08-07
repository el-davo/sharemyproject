import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdListItemComponent } from './md-list-item.component';

describe('MdListItemComponent', () => {
  let component: MdListItemComponent;
  let fixture: ComponentFixture<MdListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
