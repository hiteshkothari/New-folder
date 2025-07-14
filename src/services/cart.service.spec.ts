
import { CartService } from './cart.service';
import { IProduct } from '../models/product.modal';

describe('CartService', () => {
  let service: CartService;
  const product: IProduct = {
    id: 1,
    title: 'Test Product',
    description: 'desc',
    price: 100,
    category: 'Test Category',
    image: '',
    rating: { rate: 4.5, count: 10 },
    offer: false
  };

  beforeEach(() => {
    service = new CartService();
    service.clearCart();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a product to the cart', () => {
    service.addToCart(product);
    const items = service.getItems();
    expect(items.length).toBe(1);
    expect(items[0].id).toBe(product.id);
    expect(items[0].quantity).toBe(1);
  });

  it('should increase quantity if product already exists', () => {
    service.addToCart(product);
    service.addToCart(product);
    const items = service.getItems();
    expect(items.length).toBe(1);
    expect(items[0].quantity).toBe(2);
  });

  it('should remove a product from the cart', () => {
    service.addToCart(product);
    service.removeFromCart({ ...product, quantity: 1 });
    const items = service.getItems();
    expect(items.length).toBe(0);
  });

  it('should clear the cart', () => {
    service.addToCart(product);
    service.clearCart();
    expect(service.getItems().length).toBe(0);
  });

  it('should calculate total price correctly', () => {
    service.addToCart(product);
    service.addToCart({ ...product, id: 2, price: 50, category: 'Test Category', rating: { rate: 4.5, count: 10 }, image: '', description: 'desc', offer: false });
    service.addToCart({ ...product, id: 2, price: 50, category: 'Test Category', rating: { rate: 4.5, count: 10 }, image: '', description: 'desc', offer: false }); // quantity should be 2 for id:2
    expect(service.totalPrice()).toBe(100 + 50 * 2);
  });

  it('should calculate total quantity correctly', () => {
    service.addToCart(product);
    service.addToCart({ ...product, id: 2, category: 'Test Category', rating: { rate: 4.5, count: 10 }, image: '', description: 'desc', price: 100, offer: false });
    service.addToCart({ ...product, id: 2, category: 'Test Category', rating: { rate: 4.5, count: 10 }, image: '', description: 'desc', price: 100, offer: false }); // quantity should be 2 for id:2
    expect(service.totalItems()).toBe(3);
  });
});
