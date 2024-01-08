import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl="/api/products/"
  baseUrlC="/api/cart/"

  add(userData: any): Observable<any> {
    return this.http.post(this.baseUrl, userData);
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


  constructor(private http: HttpClient) {}
}
