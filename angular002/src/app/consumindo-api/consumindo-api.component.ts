import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-consumindo-api',
  templateUrl: './consumindo-api.component.html',
  styleUrls: ['./consumindo-api.component.css'],
})
export class ConsumindoApiComponent implements OnInit {
  pokemon!: string;
  constructor(private service: PokemonService) {}

  ngOnInit(): void {}
  buscar() {
    this.service
      .quemEhEssePokemon(this.pokemon)
      .pipe(
        catchError((error) => {
          let lista = ['Deu', 'Error'];
          return of(lista);
        })
      )
      .subscribe((response) => {
        console.log('Processando.... ', response);
      });
  }
  buscarTipos(): void {
    this.service
      .quaisTipos()
      .pipe(
        catchError((error) => {
          return of(['merendar', 'merenda!']);
        })
      )
      .subscribe((response) => {
        console.log('Processando.... ', response);
      });
  }
}
