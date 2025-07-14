import { Component } from '@angular/core';
import { ProductList } from '../product-list/product-list';
import { ViewCart } from '../view-cart/view-cart';

@Component({
  selector: 'app-landing-page',
  imports: [ProductList, ViewCart],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPage {

}
