import { TestBed, async, inject } from '@angular/core/testing';

import { HideSearchOverlayGuard } from './hide-search-overlay.guard';

describe('HideSearchOverlayGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HideSearchOverlayGuard]
    });
  });

  it('should ...', inject([HideSearchOverlayGuard], (guard: HideSearchOverlayGuard) => {
    expect(guard).toBeTruthy();
  }));
});
