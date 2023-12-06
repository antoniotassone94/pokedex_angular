import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {MainComponent} from "./components/main/main.component";
import {PokemonDetailsComponent} from "./components/pokemondetails/pokemondetails.component";
import {PokedexComponent} from "./components/pokedex/pokedex.component";
import {SearchBarComponent} from "./components/searchbar/searchbar.component";

import {HttpRequestService} from "./services/httprequest.service";
import {PokemonSearchedService} from "./services/pokemonsearched.service";
import {InsertInPokedexService} from "./services/insertinpokedex.service";
import {ShowPokemonService} from "./services/showpokemon.service";
import {ShowDetailsConditionService} from "./services/showdetailscondition.service";

import {ShowDetailsStyleDirective} from "./directives/showdetailsstyle.directive";

@NgModule({
  declarations: [
    MainComponent,
    PokemonDetailsComponent,
    PokedexComponent,
    SearchBarComponent,
    ShowDetailsStyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpRequestService,
    InsertInPokedexService,
    PokemonSearchedService,
    ShowPokemonService,
    ShowDetailsConditionService
  ],
  bootstrap: [MainComponent]
})

export class AppModule{}
