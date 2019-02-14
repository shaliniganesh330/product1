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
  this.count = this.count+1;
  console.log(this.count);
}
countFunction(){
  this.downcount =this.downcount+1;
}
}
