import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly apiRoot = 'https://get.geojs.io/v1/ip';

  constructor() {}
}
