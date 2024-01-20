import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NationsServiceService } from '../nations-service.service';
import { Regions } from '../models/regions.model';
import { count } from 'rxjs';
import { Language } from '../models/language.model';

@Component({
  selector: 'app-nation-languages',
  templateUrl: './nation-languages.component.html',
  styleUrls: ['./nation-languages.component.css']
})
export class NationLanguagesComponent implements OnInit {
  langs: Language[]=[];
  id: number=0;
  country: string='';

  constructor(private route: ActivatedRoute, private nationsService: NationsServiceService){
  }

  ngOnInit(): void {
    const country_id = Number(this.route.snapshot.paramMap.get('country_id'));
    this.id = country_id;
    this.nationsService.getCountryLangs(country_id).subscribe((data) => {
        this.langs = data;
    });
  }
  
  getCountryName(): string {
    return this.langs.length>0 ? this.langs[0].countryName : '';
  }

}

