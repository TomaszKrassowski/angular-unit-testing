import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeographicalInformationComponent } from './components/geographical-information/geographical-information.component';
import { CountryInformationComponent } from './components/country-information/country-information.component';
import { JoinerPipe } from './pipes/joiner.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';
import { CountryViewComponent } from './components/country-view/country-view.component';
import { GeoViewComponent } from './components/geo-view/geo-view.component';

@NgModule({
  declarations: [
    GeographicalInformationComponent,
    CountryViewComponent,
    CountryInformationComponent,
    JoinerPipe,
    GeoViewComponent,
  ],
  exports: [CountryViewComponent],
  imports: [CommonModule, BrowserModule, ClarityModule],
})
export class IpModule {}
