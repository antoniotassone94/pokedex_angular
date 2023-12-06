import {Component,inject} from "@angular/core";
import {NgForm} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {HttpRequestService} from "../../services/httprequest.service";
import {PokemonSearchedService} from "../../services/pokemonsearched.service";

@Component({
  selector: "app-searchbar",
  templateUrl: "./searchbar.component.html",
  styleUrl: "./searchbar.component.css"
})

export class SearchBarComponent{
  private _message:string;
  private httprequest:HttpRequestService;
  private pokemonsearched:PokemonSearchedService;

  constructor(){
    this._message = "";
    this.httprequest = inject(HttpRequestService);
    this.pokemonsearched = inject(PokemonSearchedService);
  }

  public get message():string{
    return this._message;
  }

  public searchPokemon(form:NgForm):void{
    if(form.valid){
      const pokemonName:string = form.value.pokemonName;
      this.httprequest.httpGetRequest("https://pokeapi.co/api/v2/pokemon").subscribe({
        next: (response:any) => {
          const results:any[] = response.results;
          let i:number = 0;
          while (i < results.length && results[i].name !== pokemonName){
              i++;
          }
          if(i < results.length){
            this.pokemonsearched.setNextPokemon(results[i].name,results[i].url);
            this._message = "";
          }else{
            this._message = "Il pokemon cercato non esiste.";
          }
        },
        error: (error:HttpErrorResponse) => {
          this._message = error.statusText + " (" + error.status + ")";
        }
      });
    }
  }
}
