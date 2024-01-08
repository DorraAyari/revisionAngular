import { Component } from '@angular/core';
import { ProductService } from '../product-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-shopping',
  templateUrl: './show-shopping.component.html',
  styleUrls: ['./show-shopping.component.css']
})
export class ShowShoppingComponent {
  products: any[] = [];
  cart: any[] = [];

  constructor(private productService: ProductService, private router: Router) {
    this.initData();
  }

  initData() {
    this.productService.getAllProduct().subscribe(
      products => this.products = products,
      error => console.error('Erreur lors de la récupération des produits', error)
    );

    this.productService.getAllCart().subscribe(
      cart => this.cart = cart,
      error => console.error('Erreur lors de la synchronisation du panier', error)
    );
  }

  addCart(productId: number) {
    if (this.cart.find(item => item.id === productId)) {
      return alert("Produit déjà ajouté");
    }

    const productToAdd = this.products.find(product => product.id === productId);
    if (productToAdd) {
      this.productService.addCart(productToAdd).subscribe(
        () => {
          console.log('Produit ajouté avec succès');
          alert("Produit ajouté avec succès");
          this.cart.push(productToAdd);
        },
        error => console.error('Erreur lors de l\'ajout du produit', error)
      );
    }
  }
  detail(id: number) {
    // Redirigez l'utilisateur vers la page de modification avec l'ID de l'utilisateur
    this.router.navigate(['/detail-p',id]);
  }
}
