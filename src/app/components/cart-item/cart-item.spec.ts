import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItem } from './cart-item';
import { provideZonelessChangeDetection } from '@angular/core';

describe('CartItem', () => {
  let component: CartItem;
  let fixture: ComponentFixture<CartItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
      imports: [CartItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
