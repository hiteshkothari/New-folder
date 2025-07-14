import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductList } from './product-list';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('ProductList', () => {
  let component: ProductList;
  let fixture: ComponentFixture<ProductList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), provideHttpClient()],
      imports: [ProductList],

    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter products by search query', () => {
    component.productsList.set([
      {
        id: 1,
        title: 'Shoes',
        description: 'Comfortable',
        price: 50,
        category: 'Footwear',
        image: '',
        rating: { rate: 4, count: 5 },
        offer: false
      },
      {
        id: 2,
        title: 'Watch',
        description: 'Stylish',
        price: 100,
        category: 'Accessories',
        image: '',
        rating: { rate: 5, count: 10 },
        offer: false
      }
    ]);
    component.searchQuery.set('watch');
    expect(component.filteredProducts().length).toBe(1);
    expect(component.filteredProducts()[0].title).toBe('Watch');
  });

  it('should filter products by category', () => {
    component.productsList.set([
      {
        id: 1,
        title: 'Shoes',
        description: 'Comfortable',
        price: 50,
        category: 'Footwear',
        image: '',
        rating: { rate: 4, count: 5 },
        offer: false
      },
      {
        id: 2,
        title: 'Watch',
        description: 'Stylish',
        price: 100,
        category: 'Accessories',
        image: '',
        rating: { rate: 5, count: 10 },
        offer: false
      }
    ]);
    component.selectedCategory.set('Accessories');
    expect(component.filteredProductsByCategory.length).toBe(1);
    expect(component.filteredProductsByCategory[0].category).toBe('Accessories');
  });
});
