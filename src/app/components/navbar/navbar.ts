import { Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../../services/theme/theme';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  themeService = inject(ThemeService);

  cartService = inject(CartService);

  getItemsCount = computed<number>(() => this.cartService.totalItems());
  toggleTheme() {
    this.themeService.toggleTheme();
  }
  onRouterLinkActive(event: any) {
    // Handle the event when a router link becomes active
    console.log('Router link is active:', event);
  }
}



