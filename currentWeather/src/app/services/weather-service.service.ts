import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService
{
	private static query : string = "http://api.openweathermap.org/data/2.5/weather?q=";
	private static apid : string = "&APPID=a9ffc49cdb5fb5d5ad213b3f091c1069";

	constructor(private http : HttpClient)
	{

	}

	public getData(cityName : string) : Observable<Object>
	{
		let q = WeatherServiceService.query + cityName + WeatherServiceService.apid;
		return this.http.get(
			q
			);
	}

}
