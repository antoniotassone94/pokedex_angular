import {Component,OnInit,inject} from "@angular/core";
import {PokemonModel} from "../../models/pokemon.model";
import {InsertInPokedexService} from "../../services/insertinpokedex.service";
import {ShowPokemonService} from "../../services/showpokemon.service";

@Component({
  selector: "app-pokedex",
  templateUrl: "./pokedex.component.html",
  styleUrl: "./pokedex.component.css"
})

export class PokedexComponent implements OnInit{
  private _message:string;
  private _pokemonList:PokemonModel[];
  private insertinpokedex:InsertInPokedexService;
  private showpokemon:ShowPokemonService;

  constructor(){
    this._message = "";
    this._pokemonList = [];
    this.insertinpokedex = inject(InsertInPokedexService);
    this.showpokemon = inject(ShowPokemonService);
  }

  public get message():string{
    return this._message;
  }

  public get pokemonList():PokemonModel[]{
    return this._pokemonList;
  }

  public ngOnInit():void{
    this.insertinpokedex.getNewPokemon().subscribe({
      next: (newpokemon:PokemonModel|undefined) => {
        if(newpokemon){
          let i:number = 0;
          while(i < this._pokemonList.length && this.pokemonList[i].name !== newpokemon.name){
            i++;
          }
          if(i >= this._pokemonList.length){
            if(this._pokemonList.length < 10){
              this._pokemonList.push(newpokemon);
              this._message = "";
            }else{
              this._message = "Il pokedex è pieno!";
            }
          }else{
            this._message = "Pokemon già acquisito nel tuo pokedex!";
          }
        }
      }
    });
  }

  public seePokemonDetails(pokemon:PokemonModel):void{
    this.showpokemon.setPokemon(pokemon);
  }
}
