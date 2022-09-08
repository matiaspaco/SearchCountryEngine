import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent {
  termino: string = '' 
  hayError: boolean = false;
  paises: Country[] = [];
  mostrarSugerencias: boolean = false;

  paisesSugeridos: Country [] = [];
  
  constructor( private paisService: PaisService) { }

  buscar( termino: string) {
    this.hayError = false; 
    console.log(this.termino);
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe( (paises1) => {console.log(paises1); this.paises = paises1;}//buscarpais es un metodo que devuelve un observable el cual cuando se subscriben retorna un objeto de tipo ANY que es lo que devuelve el endpoint 
    , (err) => {
      this.hayError = true;
      this.paises = [];
    });
  }

  sugerencias(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(termino)
    .subscribe(paises => 
      this.paisesSugeridos = paises.splice(0,5),
      (err) => this.paisesSugeridos = []
      );
  }

  buscarSugerido(termino: string){
    this.buscar(termino);
  }

}
