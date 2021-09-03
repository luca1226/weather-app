import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { WeatherComponent } from './weather/weather.component';


@NgModule({
  declarations: [
    WeatherForecastComponent,
    WeatherComponent
  ],
  imports:[
    NgbModule
  ],
  exports: [
    WeatherComponent
  ],
  providers: [],
  bootstrap: []
})
export class ComponentModule { }
