import {ElementRef} from "@angular/core";
import {ShowDetailsStyleDirective} from "./showdetailsstyle.directive";

describe("ShowDetailsStyleDirective", () => {
  it("should create an instance", () => {
    const directive = new ShowDetailsStyleDirective(new ElementRef(undefined));
    expect(directive).toBeTruthy();
  });
});
