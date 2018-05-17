import { Component } from '@angular/core';
import { OfferService } from './offer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  offermessage:string;

  constructor(private os:OfferService){
    this.offermessage=os.offermessage;
  }
}
