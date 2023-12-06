import {Injectable} from "@angular/core";
import {BehaviorSubject,Observable} from "rxjs";

@Injectable({
  providedIn:"root"
})

export class ShowDetailsConditionService{
  private condition:BehaviorSubject<boolean>;
  private observable:Observable<boolean>;

  constructor(){
    this.condition = new BehaviorSubject<boolean>(false);
    this.observable = this.condition.asObservable();
  }

  public getCondition():Observable<boolean>{
    return this.observable;
  }

  public setCondition(newcondition:boolean):void{
    this.condition.next(newcondition);
  }
}
