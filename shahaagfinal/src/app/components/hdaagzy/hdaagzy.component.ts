import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hdaagzy',
  templateUrl: './hdaagzy.component.html',
  styleUrls: ['./hdaagzy.component.css']
})
export class HdaagzyComponent implements OnInit {

  hdNumb = "991491807";
  hdCamp = "Davis";


  loginid = "shahaag";
  earPara = "Tree detail for: Hackberry";

  constructor() { }

  ngOnInit() {
  }

  funchaag()
  {
    this.earPara = this.loginid + ": Final Exam";
  }
}
