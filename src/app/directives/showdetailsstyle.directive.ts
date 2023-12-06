import {Input,Directive,ElementRef,OnInit,inject} from "@angular/core";
import {ShowDetailsConditionService} from "../services/showdetailscondition.service";

@Directive({
  selector: "[appShowDetailsStyle]"
})

export class ShowDetailsStyleDirective implements OnInit{
  @Input() appShowDetailsStyle:boolean = false;
  private showdetails:ShowDetailsConditionService;

  constructor(private htmlelement:ElementRef){
    this.showdetails = inject(ShowDetailsConditionService);
  }

  public ngOnInit():void{
    this.updateStyle();
    this.showdetails.getCondition().subscribe({
      next: (condition:boolean) => {
        this.appShowDetailsStyle = condition;
        this.updateStyle();
      }
    });
  }

  private updateStyle():void{
    if(this.appShowDetailsStyle === false){
      this.htmlelement.nativeElement.style.display = "none";
    }else{
      this.htmlelement.nativeElement.style.display = "";
    }
  }
}
