import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather';
import { ApiService } from 'src/app/providers/api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @Input() cityName!: string;
  public data: Weather | undefined;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  public getWeatherData(cityName:string):void{
  this.apiService.getCityWeather(cityName).subscribe((response:Weather)=>{
    this.data = response;
  })
  }

}
