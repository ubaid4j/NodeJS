import { Component, OnInit } from '@angular/core';
import {LoginName} from "../../myLoginName";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {

  assignmentTitle : String;
  name : String;


  constructor() { 
    let data: LoginName = new LoginName();
    this.assignmentTitle = data.getassignmentTitle();
    this.name = data.getName();
  }

  ngOnInit() {
  }

}
