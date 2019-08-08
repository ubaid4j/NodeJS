import { Component, OnInit } from '@angular/core';
import { SHAHAAG } from 'src/app/shahaag';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit
{

  name : String;
  loginName : String;
  studentNumber : String;
  campusName : String;

  constructor()
  {
      let data : SHAHAAG = new SHAHAAG();
      this.name = data.getName();
      this.loginName = data.getLoginName();
      this.campusName = data.getCampusName();
      this.studentNumber = data.getStudentNumber();
  }


  ngOnInit() {
  }

}
