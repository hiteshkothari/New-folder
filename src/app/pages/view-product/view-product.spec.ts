import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProduct } from './view-product';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from 'app/app.routes';
import { provideHttpClient } from '@angular/common/http';

describe('ViewProduct', () => {
  let component: ViewProduct;
  let fixture: ComponentFixture<ViewProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), provideRouter(routes), provideHttpClient()],

      imports: [ViewProduct]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ViewProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
