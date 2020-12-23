import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantDialogBoxComponent } from './merchant-dialog-box.component';

describe('MerchantDialogBoxComponent', () => {
  let component: MerchantDialogBoxComponent;
  let fixture: ComponentFixture<MerchantDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantDialogBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
