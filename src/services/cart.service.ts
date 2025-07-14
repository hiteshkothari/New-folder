import { Injectable, signal } from "@angular/core";
import { ICartItem, IProduct } from "../models/product.modal";

@Injectable({ providedIn: 'root' })
export class CartService {

  private items: ICartItem[] = [];
  totalPrice = signal<number>(0);
  totalItems = signal<number>(0);
  addToCart(product: IProduct) {
    // logic to add the product to the cart if item already exists, update the quantity
    const existingProduct = this.items.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
    this.calulatetotalPrice();
    this.totalQuantity();

  }
  // getTotalAmount(): number {
  //   return this.totalPrice();
  // }
  getItems(): ICartItem[] {
    return this.items;
  }
  clearCart() {
    this.items = [];
  }
  totalQuantity() {
    this.totalItems.update(() => this.items.reduce((sum, item) => sum + item.quantity, 0));

  }
  removeFromCart(product: ICartItem) {
    this.items = this.items.filter(item => item.id !== product.id);
    console.log(`Product ${product.title} removed from cart.`);
    this.calulatetotalPrice();
    this.totalQuantity();
  }

  calulatetotalPrice() {
    console.log('Calculating total price...');

    this.totalPrice.update(() => this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0));

  }

}
