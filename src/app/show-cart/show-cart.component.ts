import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.css']
})
export class ShowCartComponent {
  cart: any[] = [];

  constructor(private productService: ProductService, private router: Router) {
    // Récupérer les produits à afficher
    this.getCarts();
  }

  getCarts() {
    // Utilisez votre ProductService pour récupérer les produits
    this.productService.getAllCart().subscribe(
      (cart) => {
        this.cart = cart;
      },
      (error) => {
        console.error('Erreur lors de la récupération des produits', error);
      }
    );
  }
}
