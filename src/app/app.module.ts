import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ShowShoppingComponent } from './show-shopping/show-shopping.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ShowCartComponent } from './show-cart/show-cart.component';
import { DetailPComponent } from './detail-p/detail-p.component';
import { PageComponent } from './page/page.component';
import { ModificationProduitComponent } from './modification-produit/modification-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ShowShoppingComponent,
    HomeComponent,
    ShowCartComponent,
    DetailPComponent,
    PageComponent,
    ModificationProduitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
