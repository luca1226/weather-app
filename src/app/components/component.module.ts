import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { WeatherComponent } from './weather/weather.component';


@NgModule({
  declarations: [
    WeatherForecastComponent,
    WeatherComponent,
    NavBarComponent
  ],
  imports:[
    CommonModule,
    NgbModule
  ],
  exports: [
    WeatherComponent,
    NavBarComponent
  ],
  providers: [],
  bootstrap: []
})
export class ComponentModule { }
