import { Component, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import {Detail} from "./dataInterface";
import { resolve } from 'url';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
    title = 'as4';
    constructor(private httpService : HttpClient) 
    {
    }
    ngOnInit()
    {
    }
}


@Injectable()
export class CommonService {
    data;
    constructor(private httpService : HttpClient) 
    {

    }

    async fetchData()
    {
        await this.httpService
        .get("./assets/jsonFiles/cat.json")
        .subscribe(res => this.data = res);
    }

}
