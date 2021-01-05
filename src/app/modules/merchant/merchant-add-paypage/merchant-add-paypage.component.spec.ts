import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantAddPaypageComponent } from './merchant-add-paypage.component';

describe('MerchantAddPaypageComponent', () => {
  let component: MerchantAddPaypageComponent;
  let fixture: ComponentFixture<MerchantAddPaypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantAddPaypageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantAddPaypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
