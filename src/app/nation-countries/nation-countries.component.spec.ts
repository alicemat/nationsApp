import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationCountriesComponent } from './nation-countries.component';

describe('NationCountriesComponent', () => {
  let component: NationCountriesComponent;
  let fixture: ComponentFixture<NationCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NationCountriesComponent]
    });
    fixture = TestBed.createComponent(NationCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
