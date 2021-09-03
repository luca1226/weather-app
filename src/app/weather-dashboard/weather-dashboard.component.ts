import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.scss']
})
export class WeatherDashboardComponent implements OnInit {
  public cities:string[] = ['Amsterdam', 'Geneve', 'Napoli', 'London', 'Paris'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
