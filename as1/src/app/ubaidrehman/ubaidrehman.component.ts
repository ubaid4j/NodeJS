import { Component, OnInit, NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MyBooks} from "./../MyBooks";
import { BookInfo } from '../bookinfo';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatList, MatListItem, 
MatTableDataSource} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-ubaidrehman',
  templateUrl: './ubaidrehman.component.html',
  styleUrls: ['./ubaidrehman.component.css'],

})

@NgModule({
    imports : [
      BrowserAnimationsModule, BrowserModule, 
      MatButtonModule, MatCheckboxModule, MatList, MatListItem
    ],
    exports : [
      BrowserAnimationsModule, BrowserModule, 
      MatButtonModule, MatCheckboxModule, MatList, MatListItem
    ]
})
export class UbaidrehmanComponent implements OnInit
{

  books : Array<BookInfo>; 
  book : BookInfo;

  constructor()
  {
    let myBooks : MyBooks = new MyBooks();
    this.books = myBooks.getBooks();
  }

  ngOnInit()
  {
    this.book = this.books[0];
  }

  onActionListener(id:number)
  {
    this.book = this.books[id - 1];
  }
}
