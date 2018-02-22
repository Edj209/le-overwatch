import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MapStatisticComponent } from './map-statistic/map-statistic.component';
import { ChooseMapStatisticComponent } from './choose-map-statistic/choose-map-statistic.component';
import { OwHeroService } from './ow-hero.service';


@NgModule({
  declarations: [
    AppComponent,
    MapStatisticComponent,
    ChooseMapStatisticComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [OwHeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
