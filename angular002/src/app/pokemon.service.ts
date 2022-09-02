import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  path: string = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  quemEhEssePokemon(pokemon: string) {
    return this.http.get<any>(this.path + '/pokemon/' + pokemon);
  }
  quaisTipos() {
    return this.http.get<any>(this.path + '/type/');
  }
}
