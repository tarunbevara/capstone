import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionbarComponent } from './regionbar.component';

describe('RegionbarComponent', () => {
  let component: RegionbarComponent;
  let fixture: ComponentFixture<RegionbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
