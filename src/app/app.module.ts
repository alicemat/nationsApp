import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule, PaginationControlsDirective } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NationCountriesComponent } from './nation-countries/nation-countries.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NationStatsComponent } from './nation-stats/nation-stats.component';
import { NationRegionsComponent } from './nation-regions/nation-regions.component';
import { NationLanguagesComponent } from './nation-languages/nation-languages.component';
import { RegionsFilterPipe } from './regions-filter.pipe';
import { FormsModule } from '@angular/forms';
import { YearFilterPipe } from './year-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NationCountriesComponent,
    HomeComponent,
    NationStatsComponent,
    NationRegionsComponent,
    NationLanguagesComponent,
    RegionsFilterPipe,
    YearFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
