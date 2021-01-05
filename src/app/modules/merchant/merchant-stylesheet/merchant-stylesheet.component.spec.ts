import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantStylesheetComponent } from './merchant-stylesheet.component';

describe('MerchantStylesheetComponent', () => {
  let component: MerchantStylesheetComponent;
  let fixture: ComponentFixture<MerchantStylesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantStylesheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantStylesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
