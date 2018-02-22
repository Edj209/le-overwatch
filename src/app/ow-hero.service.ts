import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

export interface OWHeroStats {
  name: string;
  soldier76: string;
  roadhog: string;

  defense: string;
  offense: string;

  wr: string;
  pr: string;
}


@Injectable()
export class OwHeroService {
  jsonUrl = 'assets/fakeMapStatistics.json';

  constructor(private http: HttpClient) { }

  getJson() {
    return this.http.get(this.jsonUrl);
  }

}
