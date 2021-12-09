import { Component, OnInit } from '@angular/core';
import { IPApiService } from '../../../../services/ip-api.service';
import { Observable } from 'rxjs';
import { IRawGeo } from '../../../../models/ip';

@Component({
  selector: 'app-geo-view',
  templateUrl: './geo-view.component.html',
  styleUrls: ['./geo-view.component.scss'],
})
export class GeoViewComponent implements OnInit {
  public geoInformation$!: Observable<IRawGeo>;

  constructor(private readonly ipApiService: IPApiService) {}

  ngOnInit(): void {
    this.geoInformation$ = this.ipApiService.getGeoInformation();
  }
}
