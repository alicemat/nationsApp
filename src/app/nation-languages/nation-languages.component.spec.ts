import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationLanguagesComponent } from './nation-languages.component';

describe('NationLanguagesComponent', () => {
  let component: NationLanguagesComponent;
  let fixture: ComponentFixture<NationLanguagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NationLanguagesComponent]
    });
    fixture = TestBed.createComponent(NationLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
