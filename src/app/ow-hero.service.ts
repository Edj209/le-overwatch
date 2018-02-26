import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { OwheroStatsInterface } from './interfaces/owhero-stats-interface';


@Injectable()
export class OwHeroService {
  jsonUrl = 'assets/fakeMapStatistics.json';

  constructor(private http: HttpClient) { }

  getJson() {
    return this.http.get(this.jsonUrl);
  }

}
