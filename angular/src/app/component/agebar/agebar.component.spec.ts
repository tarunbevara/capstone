import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgebarComponent } from './agebar.component';

describe('AgebarComponent', () => {
  let component: AgebarComponent;
  let fixture: ComponentFixture<AgebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
