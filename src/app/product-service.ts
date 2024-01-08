import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Produit } from './Model/Produit';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl="/api/products/"
  baseUrlC="/api/cart/"

  add(userData: any): Observable<any> {
    return this.http.post(this.baseUrl, userData);
  }
  update(id: number, updatedProduit: Produit): Observable<Produit> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Produit>(url, updatedProduit);
  }
  getAllProduct() {
    return this.http.get<any[]>(this.baseUrl);
  }
  addCart(userData: any): Observable<any> {
    return this.http.post(this.baseUrlC, userData);
  }
  getAllCart() {
    return this.http.get<any[]>(this.baseUrlC);
  }
 // Add a method to get a chambre by ID
 getProductById(id: number): Observable<Produit> {
  const url = `${this.baseUrl}/${id}`;
  return this.http.get<Produit>(url);
}

  constructor(private http: HttpClient) {}
}
