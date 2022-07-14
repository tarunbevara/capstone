import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SexbarComponent } from './sexbar.component';

describe('SexbarComponent', () => {
  let component: SexbarComponent;
  let fixture: ComponentFixture<SexbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SexbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SexbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
