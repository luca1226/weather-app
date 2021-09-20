import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UnixTimestampPipe } from './pipe/unix-timestamp.pipe';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { WeatherComponent } from './weather/weather.component';


@NgModule({
  declarations: [
    WeatherForecastComponent,
    WeatherComponent,
    NavBarComponent,
    UnixTimestampPipe,
    FooterComponent
  ],
  imports:[
    CommonModule,
    NgbModule
  ],
  exports: [
    WeatherComponent,
    NavBarComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: []
})
export class ComponentModule { }
