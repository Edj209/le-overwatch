import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
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
    return this.http.get<OWHeroStats>(this.jsonUrl);
  }

}
