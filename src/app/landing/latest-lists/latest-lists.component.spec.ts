import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestListsComponent } from './latest-lists.component';

describe('LatestListsComponent', () => {
  let component: LatestListsComponent;
  let fixture: ComponentFixture<LatestListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
