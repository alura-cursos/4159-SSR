import { afterNextRender, Component } from '@angular/core';

import { ProductsListComponent } from '../../components/products-list/products-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

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
}
