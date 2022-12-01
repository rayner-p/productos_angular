import { Component } from '@angular/core';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tienda_ups';
  products: any;

  constructor(private productService: ProductosService) {
    this.products = productService.getProduct();
  }
}
