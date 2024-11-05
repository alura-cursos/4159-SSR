import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatList, MatListItem } from '@angular/material/list';

import { Product } from '../../interfaces/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    MatGridList,
    MatGridTile,
    MatList,
    MatListItem
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit{

  productsByCategory: { category: string, products: Product[] }[] = [];
  products$!: Observable<Product[]>;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.products$ = this.productService.getProducts();
    this.products$.subscribe(products => {
      this.groupProductsByCategory(products)
      console.log(products)
    })
  }

  groupProductsByCategory(products: Product[]) {
    const categories = [...new Set(products.map(product => product.category))];
    this.productsByCategory = categories.map(category => ({
      category,
      products: products.filter(product => product.category === category)
    }));
  }
}

