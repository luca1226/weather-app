import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { WeatherForecast } from 'src/app/models/weather-forecast.model';
import { ApiService } from 'src/app/providers/api.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {

  
  @Input() lon!: number;
  @Input() lat!: number;
  @Input() name!: string;
  @Input() units: string = 'metric';

  public data: WeatherForecast | undefined;
  public error: string | undefined;

  constructor(public activeModal: NgbActiveModal, private apiService: ApiService) { }

  ngOnInit(): void {
    if (this.lon != null && this.lat != null && this.units != null) {
      console.log(this.lon)
      this.getWeatherForecast(this.lon, this.lat, this.units);
    }
  }

  /**
   * Fetch forecast data from the backend
   *
   * @param lon
   * @param lat
   * @param units
   */
   public getWeatherForecast(lon: number, lat: number, units: string): void {
    this.error = undefined;

    this.apiService.getCityForecastWeather(lon, lat, units).subscribe(
      (response: any) => {
        console.log(response)
        this.data = response;
      },
      (error) => {

        if (error.status == 404) {
          this.error = `${this.name} is not found`;
        } else {
          this.error = error.message;
        }
      }
    )
  }
  
  /**
   * Get the weather icon URL
   */
   public getWeatherIconURL(): string | null {
    if (this.data != null && this.data.current.weather && this.data.current.weather.length > 0) {
      return `https://openweathermap.org/img/wn/${this.data.current.weather[0].icon}.png`;
    } else {
      return null;
    }
  }
}
