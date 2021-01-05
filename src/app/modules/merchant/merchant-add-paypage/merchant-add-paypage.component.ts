import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MerchantService } from '../../../core/http';
import { Merchant } from '../../../shared/models';

@Component({
  selector: 'app-merchant-add-paypage',
  templateUrl: './merchant-add-paypage.component.html',
  styleUrls: ['./merchant-add-paypage.component.scss']
})
export class MerchantAddPaypageComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: MerchantService
  ) { }

  merchant: any = new Merchant();
  ngOnInit(): void {
  }

  onCancel() {
    this.router.navigate(['merchants/view']);
  }

  onSave() {
    console.log('before create new merchant', this.merchant);
    this.service.postMerchant(this.merchant).subscribe((data: any) => {
        console.log('post merchant', data);
        this.service.updateMerchants('refresh');
        const newMerchant = JSON.parse(data);
        this.service.updateEditingMerchant(newMerchant);
        this.service.currentEditingMerchant.subscribe((merchant: any) => {
          console.log('-->', merchant);
          this.router.navigate([`merchants/edit-paypage/${merchant.id}/info`]);
        })
        
      },
      error => {
        console.log(error);
      }
      );
  }
}
