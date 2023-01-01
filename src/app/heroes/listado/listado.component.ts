import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroesBorrados: string[] = [];

  borrarHeroe(): void {
    let heroeBorrado = this.heroes.pop();
    this.heroesBorrados.push(heroeBorrado || '');
    console.log(heroeBorrado);
  }
}
