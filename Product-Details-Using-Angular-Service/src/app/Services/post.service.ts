import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  getProducts(){
    return this.http.get('/assets/Product.json');
  }

  addProduct(post) {
    return this.http.post('/assets/Product.json', JSON.stringify(post))
  }


}
