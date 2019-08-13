import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() footerInfo : Student;


  constructor() { }

  ngOnInit() {
  }

}
