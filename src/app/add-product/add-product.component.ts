import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  cout!:Number;
  userForm: FormGroup; // Déclarez la propriété userForm de type FormGroup
  constructor(private formBuilder: FormBuilder, private productService: ProductService) {
    // Initialisez le formulaire avec les champs requis et des validateurs
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [ Validators.pattern("[0-9]*")]],
      description: ['', [Validators.required, Validators.minLength(10)]],

     // email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._-]+@gmail.com$")]],
   //  category: ['Customer'], // Valeur par défaut
     // password: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9]{8,}?")]]
    });
  }
  onSubmit() {


    // Vérifiez que userForm n'est pas nul
    if (this.userForm?.valid) {
      // Récupérez les valeurs du formulaire
      const formData = this.userForm.value;

      // Utilisez le service pour ajouter l'utilisateur
      this.productService.add(formData).subscribe(
        (response) => {
          console.log('product ajouté avec succès');
          alert("produit ajouter aave succees");
          // Réinitialisez le formulaire après l'ajout
          this.userForm.reset();
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de product', error);
        }
      );
    }
  }
}
