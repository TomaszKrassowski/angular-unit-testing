import { Component, OnInit } from '@angular/core';
import { IPApiService } from '../../../../services/ip-api.service';
import { Observable } from 'rxjs';
import { IRawCountry } from '../../../../models/ip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ip-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.scss'],
})
export class CountryViewComponent implements OnInit {
  public userCountryIPAddress$!: Observable<IRawCountry>;

  constructor(private readonly ipApiService: IPApiService, private readonly router: Router) {}

  ngOnInit(): void {
    this.userCountryIPAddress$ = this.ipApiService.getCountryInformation();
  }

  navigateToGeoInfo() {
    this.router.navigate(['geo']);
  }
}
