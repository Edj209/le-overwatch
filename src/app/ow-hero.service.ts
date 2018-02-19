import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class OwHeroService {
  jsonUrl = 'assets/fakeMapStatistics.json';

  constructor(private http: HttpClient) { }

  getJson() {
    return this.http.get(this.jsonUrl);
  }

}
