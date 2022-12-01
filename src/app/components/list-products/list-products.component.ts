import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  products: any;
  constructor(private productservice: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productservice.getProducts();
  }
}
