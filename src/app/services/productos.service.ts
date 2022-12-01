import { Injectable } from '@angular/core';
import { Product } from '../domain/products';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  products: Product[] = [];

  constructor() {}
  saveProduct(product: Product) {
    this.products.push(product);
  }
  getProduct() {
    return this.products;
  }
}
