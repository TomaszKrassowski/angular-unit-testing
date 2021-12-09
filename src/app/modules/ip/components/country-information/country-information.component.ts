import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-country-information',
  templateUrl: './country-information.component.html',
  styleUrls: ['./country-information.component.scss'],
})
export class CountryInformationComponent implements OnInit {
  @Input() public ip!: string;
  @Input() public code!: string;
  @Input() public name!: string;
  @Output() public showGeoInfo = new EventEmitter<string>();

  public joinSign = ' - ';

  constructor() {}

  ngOnInit(): void {}

  showGeoInfoClick() {
    this.showGeoInfo.emit(this.ip);
  }
}
