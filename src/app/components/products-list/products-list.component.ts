import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Product } from '../../interfaces/product';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent{

  productsByCategory: { category: string, products: Product[] }[] = [];

  groupProductsByCategory(products: Product[]) {
    const categories = [...new Set(products.map(product => product.category))];
    this.productsByCategory = categories.map(category => ({
      category,
      products: products.filter(product => product.category === category)
    }));
  }
}

