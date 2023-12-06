import {Injectable} from "@angular/core";
import {BehaviorSubject,Observable} from "rxjs";
import {PokemonModel} from "../models/pokemon.model";

@Injectable({
  providedIn:"root"
})

export class InsertInPokedexService{
  private newpokemon:BehaviorSubject<PokemonModel|undefined>;
  private observable:Observable<PokemonModel|undefined>;

  constructor(){
    this.newpokemon = new BehaviorSubject<PokemonModel|undefined>(undefined);
    this.observable = this.newpokemon.asObservable();
  }

  public getNewPokemon():Observable<PokemonModel|undefined>{
    return this.observable;
  }

  public setNewPokemon(pokemon:PokemonModel):void{
    this.newpokemon.next(pokemon);
  }
}
