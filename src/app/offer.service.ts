import { Injectable } from '@angular/core';

@Injectable()
export class OfferService {
  offerday: boolean = true;
  offermessage: string;
  constructor() { 
    this.offermessage ='Summer offer 40% off on all Cloud Servises';
  }

}
