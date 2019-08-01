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

	data1 : any = new Object();
  data2 : any = new Object();
	constructor(private service : HttpClient)
	{
		// service.fetchData().then(() => console.log(service.data))
	}

	ngOnInit()
	{
        this.getData1().then((data1 : any) => {
            this.data1 = data1;
        });

        this.getData2().then((data2 : any) => {
          this.data2 = data2;
        });

    }

    async getData1()
    {
      let result = await this.service
          .get("./assets/jsonFiles/cat.json").toPromise();

          return result;
    }

    async getData2()
    {
      let result = await this.service
          .get("./assets/jsonFiles/horse.json").toPromise();

          return result;
    }
    


    click1()
    {
        console.log("llllllllllllllllll");
    }
}
