import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryViewComponent } from './modules/ip/components/country-view/country-view.component';
import { GeoViewComponent } from './modules/ip/components/geo-view/geo-view.component';

const routes: Routes = [
  { path: '', component: CountryViewComponent },
  { path: 'geo', component: GeoViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
