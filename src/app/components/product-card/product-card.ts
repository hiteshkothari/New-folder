import { Component, inject, input } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { IProduct } from '../../../models/product.modal';
import { SlicePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [SlicePipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard {
  // Define properties for the product card
  private cartService = inject(CartService);
  product = input<IProduct>({
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0
    }
  });
  isExpandedDescription: boolean = false;
  isExpandedTitle: boolean = false;
  router = inject(Router);
  viewProduct(product: IProduct) {
    // Logic to view the product details
    console.log(`Viewing product: ${this.product().title}`);
    this.router.navigate(['/view-product', product.id]);
  }


  toggleTitle() {
    this.isExpandedTitle = !this.isExpandedTitle;
  }
  toggleDescription() {
    this.isExpandedDescription = !this.isExpandedDescription;
  }

  addToCart(product: IProduct): void {
    // Logic to add the product to the cart
    console.log(`Product ${product.title} added to cart.`);
    this.cartService.addToCart(product);
  }
  // random() {
  //   return Math.random() > 0.5;
  // }
}
