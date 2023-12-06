import {TestBed} from "@angular/core/testing";
import {PokemonSearchedService} from "./pokemonsearched.service";

describe("PokemonSearchedService", () => {
  let service: PokemonSearchedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonSearchedService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
