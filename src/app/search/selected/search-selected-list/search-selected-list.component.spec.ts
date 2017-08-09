import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSelectedListComponent } from './search-selected-list.component';

describe('SearchSelectedListComponent', () => {
  let component: SearchSelectedListComponent;
  let fixture: ComponentFixture<SearchSelectedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSelectedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSelectedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
