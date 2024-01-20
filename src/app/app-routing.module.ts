import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NationCountriesComponent } from './nation-countries/nation-countries.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NationStatsComponent } from './nation-stats/nation-stats.component';
import { NationRegionsComponent } from './nation-regions/nation-regions.component';
import { NationLanguagesComponent } from './nation-languages/nation-languages.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'countries', component: NationCountriesComponent},
  { path: 'countries/:country_id', component: NationLanguagesComponent },
  { path: 'stats', component: NationStatsComponent},
  { path: 'regions', component: NationRegionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
