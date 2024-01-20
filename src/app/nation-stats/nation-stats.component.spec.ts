import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationStatsComponent } from './nation-stats.component';

describe('NationStatsComponent', () => {
  let component: NationStatsComponent;
  let fixture: ComponentFixture<NationStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NationStatsComponent]
    });
    fixture = TestBed.createComponent(NationStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
