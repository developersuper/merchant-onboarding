import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantTermsAndConditionsComponent } from './merchant-terms-and-conditions.component';

describe('MerchantTermsAndConditionsComponent', () => {
  let component: MerchantTermsAndConditionsComponent;
  let fixture: ComponentFixture<MerchantTermsAndConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantTermsAndConditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantTermsAndConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
