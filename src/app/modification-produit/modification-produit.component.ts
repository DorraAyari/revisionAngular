import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-modification-produit',
  templateUrl: './modification-produit.component.html',
  styleUrls: ['./modification-produit.component.css']
})
export class ModificationProduitComponent implements OnInit {
  userForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Initialisation du formulaire avec les champs nécessaires
    this.userForm = this.formBuilder.group({
      id: [''], // Champ ID peut être modifiable ou caché selon votre besoin
      name: ['', Validators.required],
      price: ['', [Validators.pattern('^[0-9]+$')]],
      description: ['', [Validators.required, Validators.minLength(3)]],
    });

    // Appel à une fonction pour récupérer les données existantes à modifier
    this.loadDataForModification();
  }

  loadDataForModification() {
    // Utilisation de ActivatedRoute pour récupérer le paramètre d'URL (id)
    const productId = +this.route.snapshot.params['id']; // Utilisez + pour convertir la chaîne en nombre

    // Appel au service pour récupérer les données du produit à modifier
    this.productService.getProductById(productId).subscribe(
      (product) => {
        // Mettez à jour les valeurs des champs du formulaire avec les données existantes
        this.userForm.patchValue({
          id: product.id,
          name: product.name,
          price: product.price,
          description: product.description,
          // Mettez à jour d'autres champs si nécessaire
        });
      },
      (error) => {
        console.error('Erreur lors de la récupération des données du produit à modifier', error);
      }
    );
  }

  onSubmit() {
    // Logique de soumission du formulaire de modification ici
    // Vous pouvez accéder aux valeurs du formulaire via this.userForm.value
    const productId = +this.route.snapshot.params['id']; // Utilisez + pour convertir la chaîne en nombre

    this.productService.update(productId, this.userForm.value).subscribe(
      (updatedProduct) => {
        console.log('Produit mis à jour avec succès', updatedProduct);
        // Redirigez l'utilisateur vers la liste des produits ou une autre page après la modification
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du produit', error);
      }
    );
  }
}
