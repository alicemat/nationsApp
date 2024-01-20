import { Component, OnInit } from '@angular/core';
import { Stats } from '../models/stats.model';
import { NationsServiceService } from '../nations-service.service';

@Component({
  selector: 'app-nation-stats',
  templateUrl: './nation-stats.component.html',
  styleUrls: ['./nation-stats.component.css']
})
export class NationStatsComponent implements OnInit{
  stats: Stats[]=[];

  constructor(private nationsService: NationsServiceService){}

  ngOnInit(): void {
    this.nationsService.getCountriesStats().subscribe((data) => {
        this.stats = data;
    });
}
}
