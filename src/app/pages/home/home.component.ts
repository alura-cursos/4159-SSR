import { afterNextRender, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { ProductsListComponent } from '../../components/products-list/products-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  constructor() {
    afterNextRender(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          console.log('Latitude', position.coords.latitude)
        })
      } else {
        console.error("Erro ao obter a localização")
      }
    })
  }

  ngOnInit(): void {
    this.setPageMeta();
  }

  setPageMeta() {
    this.title.setTitle('Deleite - a melhor experiência em sabores');
  }
}
