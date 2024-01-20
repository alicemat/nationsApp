import { Component, OnInit } from '@angular/core';
import { Regions } from '../models/regions.model';
import { NationsServiceService } from '../nations-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nation-regions',
  templateUrl: './nation-regions.component.html',
  styleUrls: ['./nation-regions.component.css']
})
export class NationRegionsComponent implements OnInit {
  regions: Regions[]=[];

  constructor(private nationsService: NationsServiceService, private router: Router){}

  ngOnInit(): void {
    this.nationsService.getRegionsStats().subscribe((data) => {
        this.regions = data;
    });
}
}
