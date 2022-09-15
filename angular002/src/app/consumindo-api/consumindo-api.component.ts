import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { BackendService } from '../backend.service';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-consumindo-api',
  templateUrl: './consumindo-api.component.html',
  styleUrls: ['./consumindo-api.component.css'],
})
export class ConsumindoApiComponent implements OnInit {
  pokemon!: string;
  email: string = '';
  senha: string = '';
  constructor(
    private service: PokemonService,
    private servicoBack: BackendService
  ) {}

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
  login(): void {
    this.servicoBack
      .login(this.getDados())
      .pipe(
        catchError((error) => {
          return of(error);
        })
      )

      .subscribe((response: any) => {
        console.log(response);
      });
  }

  register(): void {
    this.servicoBack
      .register(this.getDados())
      .pipe(
        catchError((error) => {
          return of(error);
        })
      )

      .subscribe((response: any) => {
        console.log(response);
      });
  }

  getDados(): any {
    return {
      email: this.email,

      senha: this.senha,
    };
  }
}
