import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroe_borrado: string = "";

  borrarHeroe() {
    this.heroe_borrado = this.heroes.pop() || "";
  }

}
