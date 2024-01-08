import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { ShowShoppingComponent } from './show-shopping/show-shopping.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { ShowCartComponent } from './show-cart/show-cart.component';
import { DetailPComponent } from './detail-p/detail-p.component';
import { ModificationProduitComponent } from './modification-produit/modification-produit.component';


const routes: Routes = [


  {path:'product',component:AddProductComponent},
  {path:'home',component:HomeComponent},
  {path:'shop',component:ShowShoppingComponent},
  {path:'show',component:ShowCartComponent},
  {path:'detail-p/:id',component:DetailPComponent},
  {path:'modification-produit/:id',component:ModificationProduitComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
