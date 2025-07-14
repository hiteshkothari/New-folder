import { Component, inject, model, signal } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { ProductService } from '../../../services/product.service';
import { IProduct } from '../../../models/product.modal';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard, FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList {
  private productService = inject(ProductService);
  searchQuery = model<string>('');
  constructor() {
    this.loadProducts();
  }
  loading = signal<boolean>(true);
  productsList = signal<IProduct[]>([]);
  private loadProducts(): void {
    console.log('Loading products...');
    this.productService.getProducts().subscribe({
      next: (products) => { this.loading.update(() => false); this.productsList.set(products.map(item => { item.offer = Math.random() > 0.5; return item; })); this.allCategories.update(() => this.categories.concat('all')); },
      error: (error) => console.error('Error fetching products:', error)
    });
  }

  selectedCategory = model<string>('all');
  allCategories = signal<string[]>(['all']);

  get categories(): string[] {
    let c = this.productsList().map(product => product.category)
    return Array.from(new Set(c)).sort((a, b) => a.localeCompare(b));
  }

  get filteredProductsByCategory(): IProduct[] {
    if (this.selectedCategory() === 'all') {
      return this.filteredProducts();
    }
    const keyword = this.searchQuery().toLowerCase().trim();
    return this.filteredProducts().filter(product => {
      // const product.category === this.selectedCategory()
      const matchesCategory = this.selectedCategory() === 'All' || product.category === this.selectedCategory();
      const matchesKeyword = (product.title + product.description)
        .toLowerCase()
        .includes(keyword);
      return matchesCategory && matchesKeyword;
    });
  }

  filteredProducts(): IProduct[] {
    return this.productsList().filter((product) =>
      (product.title + product.description)
        .toLowerCase()
        .includes(this.searchQuery().toLowerCase())
    );
  }

}
