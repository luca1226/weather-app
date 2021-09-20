import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';
import { WeatherClick } from 'src/app/models/weather-click.model';
import { ApiService } from 'src/app/providers/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnChanges {
  @Input() cityName!: string;
  public data: Weather |undefined;
  public error: string | undefined;

  private subscription: Subscription = new Subscription();
  /**
  * It will be fired When weather box is clicked
  */
  @Output() cityClick = new EventEmitter<WeatherClick>();

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    
  }

  ngOnChanges():void{
    this.getWeatherData(this.cityName);
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }
  
  /**
   * Fetch data from the backend
   * @param cityName
   */
  public getWeatherData(cityName:string):void{
  this.subscription =this.apiService.getCityWeather(cityName).subscribe(
    (response:Weather)=>{
    this.data = response;
    this.data.wind.speed = +(this.data.wind.speed * ((60*60)/1000)).toFixed(2);
  },(error)=>{
    if (error.status == 404) {
      this.error = `${this.cityName} is not found`;
    } else {
      this.error = error.message;
    }
  })
  }

  /**
   * Get the weather icon URL
   */
  public getWeatherIconURL(): string | null {
    if (this.data != null && this.data.weather != null && this.data.weather.length > 0) {
      return `https://openweathermap.org/img/wn/${this.data.weather[0].icon}.png`;
    } else {
      return null;
    }
  }

  /**
  * fire click event when weather box is getting clicked
  */
  public handleClick(): void {
    if (this.data != null) {
      this.cityClick.emit({
        lon: this.data.coord.lon,
        lat: this.data.coord.lat,
        name: this.data.name
      });
    }
  }

}
