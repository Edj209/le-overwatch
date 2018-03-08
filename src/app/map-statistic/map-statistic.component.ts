import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { OwHeroService } from '../ow-hero.service';
import { OwheroStatsInterface } from '../interfaces/owhero-stats-interface';


@Component({
  selector: 'app-map-statistic',
  templateUrl: './map-statistic.component.html',
  styleUrls: ['./map-statistic.component.css']
})
export class MapStatisticComponent implements OnInit {

  mapName: String;
  owHeroStats: OwheroStatsInterface;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private owHeroService: OwHeroService
  ) { }

  ngOnInit() {
    this.getMapName();
    this.getMapStatistics();
  }

  // Gets the name of the map.
  getMapName() {
    // Gets the name from the url parameter mapName.
    this.route.params.subscribe(params => this.mapName = params['mapName']);
    // Makes the first character uppercase.
    this.mapName = this.mapName.charAt(0).toUpperCase() + this.mapName.slice(1);
  }

  // Goes back a page.
  goBack() {
    this.location.back();
  }

  // retrieves the json from the service with the ow hero stats
  // In the future it will grab data from a Mock JSON until an API is ready for it.
  getMapStatistics() {
    this.owHeroService.getJson().subscribe(data => this.owHeroStats = <OwheroStatsInterface> data);
  }

}
