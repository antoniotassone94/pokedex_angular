import {TestBed} from "@angular/core/testing";
import {InsertInPokedexService} from "./insertinpokedex.service";

describe("InsertInPokedexService", () => {
  let service: InsertInPokedexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertInPokedexService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
