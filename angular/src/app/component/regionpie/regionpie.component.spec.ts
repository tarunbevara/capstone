import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionpieComponent } from './regionpie.component';

describe('RegionpieComponent', () => {
  let component: RegionpieComponent;
  let fixture: ComponentFixture<RegionpieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionpieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionpieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
