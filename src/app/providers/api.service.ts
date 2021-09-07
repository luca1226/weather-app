import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather.model';
import { environment } from 'src/environments/environment';
import { WeatherForecast } from '../models/weather-forecast.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  /**
   * Find weather for a city.
   * @param cityName 
   * @returns 
   */
  public getCityWeather(cityName:string, unit:string = 'metric'): Observable<Weather>{
    return this.http.get<Weather>(environment.backendURL + `/weather?q=${cityName}&units=${unit}&appid=${environment.backendApiKey}`);
  }

    /**
   * Find weather forecast for a city.
   * @param lon 
   * @param lat 
   * @returns 
   */
     public getCityForecastWeather(lon: number, lat:number,unit:string = 'metric'): Observable<WeatherForecast>{
      return this.http.get<WeatherForecast>(environment.backendURL + `/onecall?lon=${lon}&lat=${lat}&units=${unit}&exclude=minutely,daily,alerts&appid=${environment.backendApiKey}`);
    }

}
