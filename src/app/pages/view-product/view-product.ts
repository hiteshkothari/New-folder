import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-view-product',
  imports: [],
  templateUrl: './view-product.html',
  styleUrl: './view-product.scss'
})
export class ViewProduct {
  // Logic for viewing a product will go here.
  // get id from the route and fetch product details
  // display product information, images, and options
  route = inject(ActivatedRoute);
  productId: string = "";
  productService = inject(ProductService);
  produectDetails: any = signal<any>(''); // Placeholder for product details
  router = inject(Router);

  constructor() {
    // Initialize component
    this.route.params.subscribe(params => {
      this.productId = params['id']; // Assuming the route has a parameter 'id'
      // Fetch product details using this.productId
      console.log(`Product ID: ${this.productId}`);
      // You can add a service call here to fetch product details based on the ID
      this.productService.getProductById(parseInt(this.productId)).subscribe(product => {
        console.log('Product Details:', product);
        // Handle the product details, e.g., display them in the template
        this.produectDetails.set(product);
      });
    });
  }

  ngOnInit() {
    // Fetch product details based on the ID from the route
  }
  cartService = inject(CartService);

  // Additional methods to handle product interactions can be added here
  // e.g., add to cart, view reviews, etc.
  addToCart() {
    // Logic to add the product to the cart
    console.log(`Product ${this.produectDetails().title} added to cart.`);
    this.cartService.addToCart(this.produectDetails());
  }
}
