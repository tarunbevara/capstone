import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgepieComponent } from './agepie.component';

describe('AgepieComponent', () => {
  let component: AgepieComponent;
  let fixture: ComponentFixture<AgepieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgepieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgepieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
