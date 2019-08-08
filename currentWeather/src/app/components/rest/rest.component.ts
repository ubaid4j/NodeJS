import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from 'src/app/services/weather-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {


	is : boolean = false;

	city : string = null;
	temp : string = null;
	minTemp : string = null;
	maxTemp : string = null;
	latitude : string = null;
	longtitude : string = null;

	cityName : string = null;

	constructor(private service : WeatherServiceService)
	{ }

	ngOnInit()
	{
	
	}


	public actionListener() : void
	{
		this.is = false;
		this.service.getData(this.cityName).subscribe(
			data => {

				this.city = new String(data["name"]).toString();

				this.longtitude = new String(data["coord"]["lon"]).toString();
				this.latitude = new String(data["coord"]["lat"]).toString();

				this.temp = new String(data["main"]["temp"]).toString();
				this.minTemp = new String(data["main"]["temp_min"]).toString();
				this.maxTemp = new String(data["main"]["temp_max"]).toString();


				console.log(this.longtitude);
				console.log(this.latitude);
			},
			err => {console.log(err)}, 
			() => {
				this.is = true;
			}
		);
	}
}
