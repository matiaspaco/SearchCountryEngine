import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
      margin-top: 5px;
    }
  `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];

  regionActiva: string = '';

  paisesPorRegion: Country [] = [];

  constructor(private PaisService: PaisService) { }

  getClaseCSS( region : string): string{
    return (region  === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activaRegion( region: string){
    if (this.regionActiva === region) {
      return ;
    }
    this.regionActiva = region;
    this.paisesPorRegion = [];
    this.PaisService.buscarRegion(this.regionActiva)
    .subscribe( (listadoPaisesPorRegion:Country[]) => {
      this.paisesPorRegion = listadoPaisesPorRegion;
      console.log(listadoPaisesPorRegion);
    } );
  }

}
