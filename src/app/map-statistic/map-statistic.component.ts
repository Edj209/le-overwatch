import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map-statistic',
  templateUrl: './map-statistic.component.html',
  styleUrls: ['./map-statistic.component.css']
})
export class MapStatisticComponent implements OnInit {

  mapName: String;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getMapStatistics();
  }

  // Gets the name of the map.
  // In the future it will grab data from a Mock JSON until an API is ready for it.
  getMapStatistics() {
    // Gets the name from the url paramEter mapName.
    this.mapName = this.route.snapshot.paramMap.get('mapName');
    // Makes the first character uppercase.
    this.mapName = this.mapName.charAt(0).toUpperCase() + this.mapName.slice(1);
  }
}
