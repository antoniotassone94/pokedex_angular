import {Injectable} from "@angular/core";
import {BehaviorSubject,Observable} from "rxjs";
import {SearchResultModel} from "../models/searchresult.model";

@Injectable({
  providedIn:"root"
})

export class PokemonSearchedService{
  private nextpokemon:BehaviorSubject<SearchResultModel>;
  private observable:Observable<SearchResultModel>;

  constructor(){
    this.nextpokemon = new BehaviorSubject<SearchResultModel>(new SearchResultModel());
    this.observable = this.nextpokemon.asObservable();
  }

  public getNextPokemon():Observable<SearchResultModel>{
    return this.observable;
  }

  public setNextPokemon(name:string,url:string):void{
    const searchresult:SearchResultModel = new SearchResultModel();
    searchresult.name = name;
    searchresult.url = url;
    this.nextpokemon.next(searchresult);
  }
}
