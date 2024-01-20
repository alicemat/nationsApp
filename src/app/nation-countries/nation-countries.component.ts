import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country.model';
import { NationsServiceService } from '../nations-service.service';

@Component({
  selector: 'app-nation-countries',
  templateUrl: './nation-countries.component.html',
  styleUrls: ['./nation-countries.component.css']
})
export class NationCountriesComponent implements OnInit {
  countries: Country[]=[];
  p: number = 1;

  constructor(private nationsService: NationsServiceService){}

  ngOnInit(): void {
    this.nationsService.getAllCountries().subscribe((data) => {
        this.countries = data;
    });
}

}
