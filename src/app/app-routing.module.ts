import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherDashboardComponent } from './weather-dashboard/weather-dashboard.component';

const routes: Routes = [
   { path: '', redirectTo: '/weather-dashboard', pathMatch: 'full' },
   { path: 'weather-dashboard', component: WeatherDashboardComponent }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }