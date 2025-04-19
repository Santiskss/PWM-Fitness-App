import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPaymentPlanComponent } from './select-payment-plan.component';

describe('SelectPaymentPlanComponent', () => {
  let component: SelectPaymentPlanComponent;
  let fixture: ComponentFixture<SelectPaymentPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectPaymentPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectPaymentPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
