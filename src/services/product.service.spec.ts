import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { IProduct } from '../models/product.modal';
import { HttpClient } from '@angular/common/http';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  const mockProducts: IProduct[] = [
    {
        id: 1,
      title: 'Test Product',
      description: 'desc',
      price: 100,
      category: 'Test Category',
      image: '',
      rating: { rate: 4.5, count: 10 },
      offer: false
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), HttpClient],

      imports: [HttpClientTestingModule],

    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch products', () => {
    service.getProducts().subscribe(products => {
      expect(products.length).toBe(1);
      expect(products[0].id).toBe(1);
    });
    const req = httpMock.expectOne('https://fakestoreapi.com/products');
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
  });

  it('should fetch product by id', () => {
    service.getProductById(1).subscribe(product => {
      expect(product).toBeTruthy();
      expect(product.id).toBe(1);
    });
    const req = httpMock.expectOne('https://fakestoreapi.com/products/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts[0]);
  });

  it('should handle error when fetching products', () => {
    let errorResponse: any;
    service.getProducts().subscribe({
      next: () => { },
      error: (error) => {
        errorResponse = error;
      }
    });
    const req = httpMock.expectOne('https://fakestoreapi.com/products');
    expect(req.request.method).toBe('GET');
    req.flush('Error loading products', { status: 500, statusText: 'Server Error' });
    expect(errorResponse).toBeTruthy();
    expect(errorResponse.status).toBe(500);
  });
});
