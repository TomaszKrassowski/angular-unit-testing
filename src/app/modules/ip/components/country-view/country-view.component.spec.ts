import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryViewComponent } from './country-view.component';

describe('IpViewComponent', () => {
  let component: CountryViewComponent;
  let fixture: ComponentFixture<CountryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryViewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
