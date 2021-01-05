import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MerchantService } from '../../../core/http';
import { IMerchant, ICredentials } from '../../../shared/interfaces';
import { Credentials } from '../../../shared/models';

@Component({
  selector: 'app-merchant-config',
  templateUrl: './merchant-config.component.html',
  styleUrls: ['./merchant-config.component.scss']
})
export class MerchantConfigComponent implements OnInit {

  merchant: any = null;
  credentials: ICredentials = new Credentials();
  constructor(
    private service: MerchantService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.service.currentEditingMerchant.subscribe(data => {
      this.merchant = data;
      if(!this.merchant){
        this.router.navigate(['merchants/view']);
      }
      console.log(data);
    });
  }

  onSave() {
    this.service.postCredentials(this.merchant.id, this.credentials).subscribe(data => {
      console.log(data);
    },
    error => {
      console.log(error);
    });
  }

  onCancel() {
    this.credentials = new Credentials();
  }
}
