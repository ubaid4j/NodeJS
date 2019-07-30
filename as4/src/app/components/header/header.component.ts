import { Component, OnInit } from '@angular/core';
import {SHAHAAG} from "../../shahaag";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {

  assignmentTitle : String;
  name : String;


  constructor() { 
    let data: SHAHAAG = new SHAHAAG();
    this.assignmentTitle = data.getassignmentTitle();
    this.name = data.getName();
  }

  ngOnInit() {
  }

}
