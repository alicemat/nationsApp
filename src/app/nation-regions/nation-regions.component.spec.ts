import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationRegionsComponent } from './nation-regions.component';

describe('NationRegionsComponent', () => {
  let component: NationRegionsComponent;
  let fixture: ComponentFixture<NationRegionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NationRegionsComponent]
    });
    fixture = TestBed.createComponent(NationRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
