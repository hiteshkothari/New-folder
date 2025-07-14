// src/app/services/theme.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private darkThemeClass = 'dark-theme';

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.enableDark();
    }
  }

  toggleTheme() {
    const body = document.body;
    if (body.classList.contains(this.darkThemeClass)) {
      body.classList.remove(this.darkThemeClass);
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.add(this.darkThemeClass);
      localStorage.setItem('theme', 'dark');
    }
  }

  enableDark() {
    document.body.classList.add(this.darkThemeClass);
    localStorage.setItem('theme', 'dark');
  }

  enableLight() {
    document.body.classList.remove(this.darkThemeClass);
    localStorage.setItem('theme', 'light');
  }
}
