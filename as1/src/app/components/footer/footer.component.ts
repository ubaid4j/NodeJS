import { Component, OnInit } from '@angular/core';
import {LoginName} from "../../myLoginName";

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
        let data : LoginName = new LoginName();
        this.name = data.getName();
        this.loginName = data.getLoginName();
        this.campusName = data.getCampusName();
        this.studentNumber = data.getStudentNumber();
    }

    ngOnInit() {
    }

}
