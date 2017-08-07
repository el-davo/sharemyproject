import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCloseComponent } from './search-close.component';

describe('SearchCloseComponent', () => {
  let component: SearchCloseComponent;
  let fixture: ComponentFixture<SearchCloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCloseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
