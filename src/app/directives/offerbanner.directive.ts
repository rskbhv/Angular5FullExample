import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { OfferService } from '../offer.service';

@Directive({
  selector: '[offer]'
})
export class OfferbannerDirective {

  constructor(private tref: TemplateRef<any>, private vc: ViewContainerRef, private os: OfferService) {

  }
  @Input() set offer(data) {
    if (this.os.offerday) {
      this.vc.createEmbeddedView(this.tref)
      setTimeout(()=>this.vc.clear(), data*1000)
    } else {
      this.vc.clear();
    }

  }
}
