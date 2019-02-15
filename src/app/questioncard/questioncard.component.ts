import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questioncard',
  templateUrl: './questioncard.component.html',
  styleUrls: ['./questioncard.component.css']
})
export class QuestioncardComponent implements OnInit {
  count : number =0;
  downcount : number=0;
  constructor() { }

  ngOnInit() {
      }
countFunc(){
if(this.count==0 && this.downcount==0)
   {
     this.count = 1;
   }
   else
   {
     this.count =0;
   }
}
countFunction(){
  if(this.count==0 && this.downcount==0)
   {
     this.downcount = 1;
   }
   else
   {
     this.downcount =0;
   }
}
}