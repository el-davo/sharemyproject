import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareListsCardComponent } from './share-lists-card.component';

describe('ShareListsCardComponent', () => {
  let component: ShareListsCardComponent;
  let fixture: ComponentFixture<ShareListsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareListsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareListsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
