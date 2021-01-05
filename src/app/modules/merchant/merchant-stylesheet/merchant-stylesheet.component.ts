import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IMerchant, IStylesheet } from '../../../shared/interfaces';
import { MerchantService } from '../../../core/http';
import { Stylesheet } from '../../../shared/models';

@Component({
  selector: 'app-merchant-stylesheet',
  templateUrl: './merchant-stylesheet.component.html',
  styleUrls: ['./merchant-stylesheet.component.scss']
})
export class MerchantStylesheetComponent implements OnInit {

  merchant: any = null;
  stylesheet: IStylesheet = new Stylesheet();
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
    this.service.postStylesheet(this.merchant.id, this.stylesheet).subscribe(data => {
      console.log(data);
    },
    error => {
      console.log(error);
    });
  }

  onCancel() {
    this.stylesheet = new Stylesheet();
  }
}
