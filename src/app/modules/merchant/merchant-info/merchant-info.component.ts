import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../../../core/http';
import { Router, ActivatedRoute } from '@angular/router';
import { IMerchant } from '../../../shared/interfaces';

@Component({
  selector: 'app-merchant-info',
  templateUrl: './merchant-info.component.html',
  styleUrls: ['./merchant-info.component.scss']
})
export class MerchantInfoComponent implements OnInit {
  disabled: boolean = false;
  merchant: any = null;
  constructor(
    private service: MerchantService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.disabled = false;
    this.service.currentEditingMerchant.subscribe(data => {
      this.merchant = data;
      if(!this.merchant){
        this.router.navigate(['merchants/view']);
      }
      console.log(data);
    });
  }

  onSave() {
    this.service.patchMerchant(this.merchant, this.merchant.id).subscribe(data => {
        console.log('patched', data);
        // this.updateLocalMerchants();
      },
      error => {
        console.log(error);
      }
      );
  }

  onCancel() {

  }

}
