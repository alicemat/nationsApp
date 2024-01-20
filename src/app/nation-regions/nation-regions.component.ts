import { Component, OnInit } from '@angular/core';
import { Regions } from '../models/regions.model';
import { NationsServiceService } from '../nations-service.service';

@Component({
  selector: 'app-nation-regions',
  templateUrl: './nation-regions.component.html',
  styleUrls: ['./nation-regions.component.css']
})
export class NationRegionsComponent implements OnInit {
  regions: Regions[]=[];
  regionsNames: string[]=[];
  regionNamefilter: string='';
  regionsYears: number[]=[];
  yearsMinFilter: number=0;
  yearsMaxFilter: number=0;
  p: number = 1;

  constructor(private nationsService: NationsServiceService){}

  ngOnInit(): void {
    this.nationsService.getRegionsStats().subscribe((data) => {
        this.regions = data;
    });
   
}
  //find unique values of regions names
  getRegionsNames(): string[]{
    for(let i=0;i<this.regions.length;i++){
      this.regionsNames.push(this.regions[i].regionName);
    }
    return [...new Set(this.regionsNames)];
  }

  //find unique values of years list
  getYears(): number[]{
    for(let i=0;i<this.regions.length;i++){
      this.regionsYears.push(this.regions[i].year);
    }
    return [...new Set(this.regionsYears)].sort((n1,n2) => n1 - n2);;
  }
}
