import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '' 
  hayError: boolean = false;
  capitales: Country[] = [];
  constructor( private paisService: PaisService) { }

  buscar( termino: string) {
    this.hayError = false; 
    console.log(this.termino);
    this.termino = termino;
    this.paisService.buscarCapital(this.termino).subscribe( (paises1) => {console.log(paises1); this.capitales = paises1;}//buscarpais es un metodo que devuelve un observable el cual cuando se subscriben retorna un objeto de tipo ANY que es lo que devuelve el endpoint 
    , (err) => {
      this.hayError = true;
      this.capitales = [];
    });
  }

  sugerencias(termino: string){
    this.hayError = false;
  }

}
