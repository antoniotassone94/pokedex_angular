import {TestBed} from "@angular/core/testing";
import {ShowPokemonService} from "./showpokemon.service";

describe("ShowPokemonService", () => {
  let service: ShowPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowPokemonService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
