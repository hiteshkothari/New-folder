import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCart } from './view-cart';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from 'app/app.routes';

describe('ViewCart', () => {
  let component: ViewCart;
  let fixture: ComponentFixture<ViewCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), provideRouter(routes)],
      imports: [ViewCart]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ViewCart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
