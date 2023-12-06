import {TestBed} from "@angular/core/testing";
import {ShowDetailsConditionService} from "./showdetailscondition.service";

describe("ShowDetailsConditionService", () => {
  let service: ShowDetailsConditionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowDetailsConditionService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
