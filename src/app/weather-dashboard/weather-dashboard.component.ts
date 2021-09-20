import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WeatherForecastComponent } from '../components/weather-forecast/weather-forecast.component';
import { WeatherClick } from '../models/weather-click.model';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.scss']
})
export class WeatherDashboardComponent implements OnInit {
  public cities:string[] = ['Amsterdam', 'Geneve', 'Napoli', 'London', 'Paris'];

  public units: string = 'metric';


  /**
  * It will be fired When an item is clicked
  */
  @Output() cityClick = new EventEmitter<WeatherClick>();

  
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  /**
   * Fired when a city weather box get clicked
   * @param event
   */
   public handleCityClick(event: WeatherClick) {
    const modalRef = this.modalService.open(WeatherForecastComponent);
    modalRef.componentInstance.lon = event.lon;
    modalRef.componentInstance.lat = event.lat;
    modalRef.componentInstance.name = event.name;
    modalRef.componentInstance.units = this.units;
  }

  addNewCity =(value: string)=>{
    if(value != ''){
      this.cities.push(value)
    }

  }

}
