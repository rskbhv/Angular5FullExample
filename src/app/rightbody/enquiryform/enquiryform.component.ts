import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../../enquiry.service';

@Component({
  selector: 'app-enquiryform',
  templateUrl: './enquiryform.component.html',
  styleUrls: ['./enquiryform.component.css']
})
export class EnquiryformComponent implements OnInit {

  name:string;
  email:string;
  message:string;
  errors:boolean=false;
  errorlist:string[];
  sending:boolean=false;
  filename:string;

  constructor(private es:EnquiryService) { }

  ngOnInit() {
  }
 
  sendEnquiry():void{
     this.errorlist=[];
     let regex=/^[a-z][a-z_\.0-9]+@[a-z]+\.[a-z]{3,5}$/;
     this.errors= false;
     if(this.name==undefined || this.name.length==0)
         this.errorlist.push("Name Should be Filled");
     
     if(this.email==undefined || this.email.length==0)
         this.errorlist.push("Email Should be Filled");
     else if(!regex.test(this.email))
         this.errorlist.push('Not in email format');
      if(this.message==undefined || this.message.length==0)
         this.errorlist.push('Message Should be Filled');   

        if(this.errorlist.length > 0){
          this.errors= true;
        }else{
          this.sending=true;
          this.filename="loading.gif";
          
          this.es.sendEnquiry({name:this.name, message:this.message, email:this.email}).subscribe(
              ()=>{
                  this.filename="sent.png";
                  setTimeout(()=>{
                    this.sending = false;
                    this.email="";
                    this.name="";
                    this.message="";
                  }, 2000);
              },
              ()=>{
                   alert("Enquiry Not Sent");
                   setTimeout(()=>{
                    this.sending = false;
                    this.email="";
                    this.name="";
                    this.message="";
                  }, 1000);
              }
          )
        }

  }
}
