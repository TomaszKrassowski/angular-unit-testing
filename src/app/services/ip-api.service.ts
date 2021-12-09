import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import { IRawCountry, IRawGeo } from '../models/ip';

@Injectable({
  providedIn: 'root',
})
export class IPApiService {
  private readonly apiRoot = 'https://get.geojs.io/v1/ip';

  constructor(private readonly httpClient: HttpClient) {}

  public getCountryInformation(): Observable<IRawCountry> {
    const url = `${this.apiRoot}/country.json`;
    return this.httpClient.get<IRawCountry>(url);
  }

  public getGeoInformation(): Observable<IRawGeo> {
    const url = `${this.apiRoot}/geo.json`;
    return this.httpClient.get<IRawGeo>(url).pipe(delay(2 * 1000));
  }
}
