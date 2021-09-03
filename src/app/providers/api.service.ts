import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather';
import { environment } from 'src/environments/environment';

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
  public getCityWeather(cityName:string): Observable<Weather>{
    return this.http.get<Weather>(environment.backendURL + `/weather?q=${cityName}&units=metric&appid=${environment.backendApiKey}`);
  }

}
