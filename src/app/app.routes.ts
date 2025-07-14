import { Routes } from '@angular/router';
import { ProductList } from './pages/product-list/product-list';
import { ViewCart } from './pages/view-cart/view-cart';
import { LandingPage } from './pages/landing-page/landing-page';
import { ViewProduct } from './pages/view-product/view-product';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'view-cart', component: ViewCart },
  { path: 'view-product/:id', component: ViewProduct },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
