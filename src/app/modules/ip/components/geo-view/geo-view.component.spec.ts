import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoViewComponent } from './geo-view.component';

describe('GeoViewComponent', () => {
  let component: GeoViewComponent;
  let fixture: ComponentFixture<GeoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeoViewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
