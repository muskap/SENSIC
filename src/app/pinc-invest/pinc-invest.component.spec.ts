import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PincInvestComponent } from './pinc-invest.component';

describe('PincInvestComponent', () => {
  let component: PincInvestComponent;
  let fixture: ComponentFixture<PincInvestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PincInvestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PincInvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
