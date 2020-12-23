import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantBoardComponent } from './merchant-board.component';

describe('MerchantBoardComponent', () => {
  let component: MerchantBoardComponent;
  let fixture: ComponentFixture<MerchantBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
