import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-geographical-information',
  templateUrl: './geographical-information.component.html',
  styleUrls: ['./geographical-information.component.scss'],
})
export class GeographicalInformationComponent implements OnInit {
  @Input() public ip!: string;
  @Input() public country!: string;
  @Input() public city!: string;
  @Input() public organizationName!: string;

  public joinSign = ' - ';

  constructor() {}

  ngOnInit(): void {}
}
