import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()]

    });
    service = TestBed.inject(ThemeService);
    // service = new ThemeService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('have the theme class', () => {
    service.enableDark();
    expect(document.body.classList).toContain('dark-theme');

  })
});
