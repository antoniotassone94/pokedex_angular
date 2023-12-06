import {Injectable} from "@angular/core";
import {BehaviorSubject,Observable} from "rxjs";
import {PokemonModel} from "../models/pokemon.model";

@Injectable({
  providedIn:"root"
})

export class ShowPokemonService{
  private pokemon:BehaviorSubject<PokemonModel>;
  private observable:Observable<PokemonModel>;

  constructor(){
    this.pokemon = new BehaviorSubject<PokemonModel>(new PokemonModel());
    this.observable = this.pokemon.asObservable();
  }

  public getPokemon():Observable<PokemonModel>{
    return this.observable;
  }

  public setPokemon(actualpokemon:PokemonModel):void{
    this.pokemon.next(actualpokemon);
  }
}
