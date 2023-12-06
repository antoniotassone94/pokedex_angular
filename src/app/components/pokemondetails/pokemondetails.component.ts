import {Component,OnInit,inject} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {HttpRequestService} from "../../services/httprequest.service";
import {PokemonSearchedService} from "../../services/pokemonsearched.service";
import {InsertInPokedexService} from "../../services/insertinpokedex.service";
import {PokemonModel} from "../../models/pokemon.model";
import {SearchResultModel} from "../../models/searchresult.model";
import {ShowPokemonService} from "../../services/showpokemon.service";

@Component({
  selector: "app-pokemondetails",
  templateUrl: "./pokemondetails.component.html",
  styleUrl: "./pokemondetails.component.css"
})

export class PokemonDetailsComponent implements OnInit{
  private _pokemon:PokemonModel;
  private _default:boolean;
  private httprequest:HttpRequestService;
  private pokemonsearched:PokemonSearchedService;
  private insertinpokedex:InsertInPokedexService;
  private showpokemon:ShowPokemonService;

  constructor(){
    this._pokemon = new PokemonModel();
    this._default = true;
    this.httprequest = inject(HttpRequestService);
    this.pokemonsearched = inject(PokemonSearchedService);
    this.insertinpokedex = inject(InsertInPokedexService);
    this.showpokemon = inject(ShowPokemonService);
  }

  public get pokemon():PokemonModel{
    return this._pokemon;
  }

  public get default():boolean{
    return this._default;
  }

  public ngOnInit():void{
    this.pokemonsearched.getNextPokemon().subscribe({
      next: (searchresult:SearchResultModel) => {
        if(searchresult.url && searchresult.url !== null && searchresult.url !== "" && searchresult.url !== "not_found"){
          this.httprequest.httpGetRequest(searchresult.url).subscribe({
            next: (pokemon:any) => {
              for(let i = 0;i < pokemon.stats.length;i++){
                if(pokemon.stats[i].stat.name === "hp"){
                  this._pokemon.hp = pokemon.stats[i].base_stat;
                }
                if(pokemon.stats[i].stat.name === "attack"){
                  this._pokemon.attack = pokemon.stats[i].base_stat;
                }
                if(pokemon.stats[i].stat.name === "defense"){
                  this._pokemon.defense = pokemon.stats[i].base_stat;
                }
                if(pokemon.stats[i].stat.name === "special-attack"){
                  this._pokemon.specialAttack = pokemon.stats[i].base_stat;
                }
                if(pokemon.stats[i].stat.name === "special-defense"){
                  this._pokemon.specialDefense = pokemon.stats[i].base_stat;
                }
                if(pokemon.stats[i].stat.name === "speed"){
                  this._pokemon.speed = pokemon.stats[i].base_stat;
                }
              }
              this._pokemon.name = searchresult.name;
              this._pokemon.height = pokemon.height;
              this._pokemon.weight = pokemon.weight;
              this._pokemon.backDefault = pokemon.sprites.back_default;
              this._pokemon.backShiny = pokemon.sprites.back_shiny;
              this._pokemon.frontDefault = pokemon.sprites.front_default;
              this._pokemon.frontShiny = pokemon.sprites.front_shiny;
            },
            error: (error:HttpErrorResponse) => {
              const errorMessage:string = error.statusText + " (" + error.status + ")";
              console.error(errorMessage);
            }
          });
        }
      }
    });
    this.showpokemon.getPokemon().subscribe({
      next: (nextpokemon:PokemonModel) => {
        this._pokemon = nextpokemon.copy();
      }
    });
  }

  public defaultView():void{
    this._default = true;
  }

  public shinyView():void{
    this._default = false;
  }

  public addInPokedex():void{
    if(this._pokemon.name !== ""){
      this.insertinpokedex.setNewPokemon(this._pokemon.copy());
    }
  }
}
