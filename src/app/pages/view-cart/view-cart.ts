import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ICartItem } from '../../../models/product.modal';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-view-cart',
  imports: [CurrencyPipe, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './view-cart.html',
  styleUrl: './view-cart.scss'
})
export class ViewCart {
  cartService = inject(CartService);
  cartItems = signal<ICartItem[]>(this.cartService.getItems());
  totalPrice = computed<number>(() => this.cartService.totalPrice());

  removeFromCart(i: number) {
    // Logic to remove item from cart
    console.log(`Removing item at index ${i} from cart`);
    this.cartService.removeFromCart(this.cartItems()[i]);
    // Update the cart items signal after removal
    this.cartItems.set(this.cartService.getItems());

  }

  // totalPrice = computed<number>(() => {
  //   console.log('Calculating total price' );

  //   return this.cartItems().reduce((sum, item) => sum + (item.price * item.quantity), 0);
  // });
  // totalPrice = computed<number>(() => this.cartService.getItems().reduce((sum, item) => sum + (item.price * item.quantity), 0));
  // totalPrice = computed<number>(() => this.cartItems().reduce((sum, item) => sum + (item.price * item.quantity), 0));
  constructor() {

    // Initialize total price
    // this.totalPrice.update(() => this.cartService.getItems().reduce((sum, item) => sum + (item.price * item.quantity), 0))
  }
  // constructor() {
  //   // this.calculateTotalPrice();
  // }
  // calculateTotalPrice() {
  //   console.log('Calculating total price');

  //   const items = this.cartItems();
  //   const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  //   this.totalPrice.set(total);
  // }

  // checkout() {
  //   // Logic to handle checkout
  //   console.log('Proceeding to checkout');
  // }
}
