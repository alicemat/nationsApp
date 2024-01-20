import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country.model';
import { Router } from '@angular/router';
import { NationsServiceService } from '../nations-service.service';


@Component({
  selector: 'app-nation-countries',
  templateUrl: './nation-countries.component.html',
  styleUrls: ['./nation-countries.component.css']
})
export class NationCountriesComponent implements OnInit {
  entities: Country[]=[];

  constructor(private nationsService: NationsServiceService, private router: Router){}

  ngOnInit(): void {
    this.nationsService.getAllCountries().subscribe((data) => {
        this.entities = data;
    });
}

}
