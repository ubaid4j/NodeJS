import { Component, Input } from '@angular/core';

import { Student } from "./student"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  bio : Student;

  constructor()
  {
    this.bio = new Student();
    this.bio.sname = "AAGAM SHAH";
    this.bio.sid = "991491807";
    this.bio.spic = "assets/images/test.jpg";
  }

  title = 'shahaagfinal';
}
