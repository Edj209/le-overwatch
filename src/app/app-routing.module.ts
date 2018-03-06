import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MapStatisticComponent} from './map-statistic/map-statistic.component';
import {ChooseMapStatisticComponent} from './choose-map-statistic/choose-map-statistic.component';

export const routes: Routes = [
  {path: '', redirectTo: '/map-statistic', pathMatch: 'full'},
  {path: 'map-statistic', component: ChooseMapStatisticComponent},
  {path: 'map-statistic/:mapName', component: MapStatisticComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
