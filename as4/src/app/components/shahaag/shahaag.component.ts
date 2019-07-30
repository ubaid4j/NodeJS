import { Component, OnInit, NgModule } from '@angular/core';
import {CommonService} from "./../../app.component";
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-shahaag',
  templateUrl: './shahaag.component.html',
  styleUrls: ['./shahaag.component.css']
})

@NgModule({
    imports : [
      BrowserAnimationsModule, BrowserModule, MatTabsModule 
    ],
    exports : [
      BrowserAnimationsModule, BrowserModule, MatTabsModule
    ]
})


export class ShahaagComponent implements OnInit {

	data : any;

	constructor(private service : HttpClient)
	{
		// service.fetchData().then(() => console.log(service.data))
	}

	ngOnInit()
	{
        this.getData().then((data : any) => {
            console.log(data);
            this.data = data;
        });
    }

    async getData()
    {
		let result = await this.service
        .get("./assets/jsonFiles/cat.json").toPromise();

        return result;
        // .subscribe(res => this.data = res);

    }
  
    click1()
    {
        console.log("llllllllllllllllll");
    }
}
