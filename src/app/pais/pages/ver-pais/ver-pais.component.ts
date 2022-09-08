import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) { }//librearia para subscribirse a cualquier cambio del url

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ( {id} ) => this.paisService.getPaisPorAlpha( id )  ),
      tap(resp => console.log(resp))
    )
    .subscribe( pais => {
      console.log(this.pais = pais);
    });


    // this.activatedRoute.params
    // .subscribe( ({ id }) => {
    //   console.log( id );
    //   this.paisService.getPaisPorAlpha(id)
    //   .subscribe( paisVer => {
    //     console.log(paisVer);
    //   });
    // });
  }
}
