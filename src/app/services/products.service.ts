/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Product } from '../domain/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsCollection: AngularFirestoreCollection<Product>;
  private products: any;

  constructor(private afs: AngularFirestore) {
    this.productsCollection = afs.collection<Product>('tienda');
    this.products = this.productsCollection.valueChanges();
    console.log('asaad', this.products);
  }

  getProducts() {
    return this.products;
  }

  getProductPrice(price: number) {
    return this.afs
      .collection<Product>('products', (ref) => ref.where('price', '>', price))
      .valueChanges();
  }
}
