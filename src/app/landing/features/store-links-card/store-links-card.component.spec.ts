import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreLinksCardComponent } from './store-links-card.component';

describe('StoreLinksCardComponent', () => {
  let component: StoreLinksCardComponent;
  let fixture: ComponentFixture<StoreLinksCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreLinksCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreLinksCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
