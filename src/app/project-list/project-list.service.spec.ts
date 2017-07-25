import { TestBed, inject } from '@angular/core/testing';

import { ProjectListService } from './project-list.service';

describe('ProjectListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectListService]
    });
  });

  it('should be created', inject([ProjectListService], (service: ProjectListService) => {
    expect(service).toBeTruthy();
  }));
});
