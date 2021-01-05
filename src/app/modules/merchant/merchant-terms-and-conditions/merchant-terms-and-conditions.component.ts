import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IMerchant, IStylesheet } from '../../../shared/interfaces';
import { MerchantService } from '../../../core/http';
import { Merchant } from 'src/app/shared/models';


@Component({
  selector: 'app-merchant-terms-and-conditions',
  templateUrl: './merchant-terms-and-conditions.component.html',
  styleUrls: ['./merchant-terms-and-conditions.component.scss']
})
export class MerchantTermsAndConditionsComponent implements OnInit {

  merchant: any = null;
  termsAndConditions: string = '';
  constructor(
    private service: MerchantService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.service.currentEditingMerchant.subscribe(data => {
      this.merchant = data;
      this.termsAndConditions = this.merchant.termsAndConditions;
      if(!this.merchant){
        this.router.navigate(['merchants/view']);
      }
      console.log(data);
    });
  }

  onSave() {
    this.service.patchMerchant({ termsAndConditions: this.termsAndConditions }, this.merchant.id).subscribe(data => {
        this.merchant.termsAndConditions = this.termsAndConditions;
        console.log('patched', data);
      },
      error => {
        console.log(error);
      }
      );
  }

  onCancel() {
    this.termsAndConditions = this.merchant.termsAndConditions;
  }

}
