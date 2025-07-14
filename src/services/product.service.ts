import { Observable } from "rxjs";
import { IProduct } from "../models/product.modal";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// services/product.service.ts
@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) { }
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl + 'products');
  }
  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.apiUrl}products/${id}`);
  }
}
