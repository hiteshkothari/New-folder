import { Component, EnvironmentInjector, inject, Injector, input, runInInjectionContext } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { ICartItem, IProduct } from '../../../models/product.modal';
// import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.scss'
})
export class CartItem {


  // Define properties for the product card
  private cartService = inject(CartService);
  product = input<ICartItem>({
    id: 0,
    title: '',
    price: 0,
    description: 'Some description',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0
    },
    quantity: 0
  });

  private environmentInjector = inject(EnvironmentInjector);

  constructor() {
    runInInjectionContext(this.environmentInjector, () => {
      inject(CartService); // Do what you need with the injected service
    });
  }


  removeFromCart(product: ICartItem): void {
    // Logic to remove the product from the cart
    console.log(`Product ${product.title} removed from cart.`);
    this.cartService.removeFromCart(product);
  }

}
