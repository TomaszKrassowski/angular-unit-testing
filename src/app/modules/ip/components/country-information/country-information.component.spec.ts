import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryInformationComponent } from './country-information.component';
import { JoinerPipe } from '../../pipes/joiner.pipe';
import { By } from '@angular/platform-browser';

describe('CountryInformationComponent', () => {
  let component: CountryInformationComponent;
  let fixture: ComponentFixture<CountryInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryInformationComponent, JoinerPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display IP value', () => {
    component.name = 'Name';
    component.ip = '1.1.1.1';
    component.code = 'Code';

    fixture.detectChanges();

    const cardTitleDiv = fixture.debugElement.query(By.css('div.card-title'));
    expect(cardTitleDiv).toBeTruthy();

    expect(cardTitleDiv.nativeElement.textContent.trim()).toEqual('1.1.1.1');
  });
});
