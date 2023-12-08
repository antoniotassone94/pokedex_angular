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
    if(localStorage.getItem("pokedex") !== null){
      const pokedexEsistente:any[] = JSON.parse(<string>localStorage.getItem("pokedex"));
      for(let i = 0;i < pokedexEsistente.length;i++){
        const pokemonAttuale:PokemonModel = new PokemonModel();
        pokemonAttuale.name = pokedexEsistente[i]._name;
        pokemonAttuale.height = pokedexEsistente[i]._height;
        pokemonAttuale.weight = pokedexEsistente[i]._weight;
        pokemonAttuale.hp = pokedexEsistente[i]._hp;
        pokemonAttuale.attack = pokedexEsistente[i]._attack;
        pokemonAttuale.defense = pokedexEsistente[i]._defense;
        pokemonAttuale.specialAttack = pokedexEsistente[i]._specialAttack;
        pokemonAttuale.specialDefense = pokedexEsistente[i]._specialDefense;
        pokemonAttuale.speed = pokedexEsistente[i]._speed;
        pokemonAttuale.backDefault = pokedexEsistente[i]._backDefault;
        pokemonAttuale.backShiny = pokedexEsistente[i]._backShiny;
        pokemonAttuale.frontDefault = pokedexEsistente[i]._frontDefault;
        pokemonAttuale.frontShiny = pokedexEsistente[i]._frontShiny;
        this._pokemonList.push(pokemonAttuale);
      }
    }
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
              localStorage.setItem("pokedex",JSON.stringify(this._pokemonList));
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
