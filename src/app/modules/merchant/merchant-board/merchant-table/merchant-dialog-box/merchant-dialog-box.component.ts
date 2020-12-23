import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MerchantService } from '../../../../../core/http';
import { IMerchant } from '../../../../../shared/interfaces';

@Component({
  selector: 'app-merchant-dialog-box',
  templateUrl: './merchant-dialog-box.component.html',
  styleUrls: ['./merchant-dialog-box.component.scss']
})
export class MerchantDialogBoxComponent {

  action: string;
  local_data: any;
  loading: string;

  constructor(
    public dialogRef: MatDialogRef<MerchantDialogBoxComponent>,
    public service: MerchantService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
      this.local_data = { ...data.data };
      this.action = data.action;
      this.loading = 'none';
      console.log("constructor of dialog", this.action, this.local_data);
  }

  submitMerchant() {
    this.loading = 'loading';
    if(typeof this.local_data.allowedPaymentTypes === 'string') {
      this.local_data.allowedPaymentTypes = this.local_data.allowedPaymentTypes.split(',');
    }
    this.service.postMerchant(this.local_data).subscribe(
      (data) => {
        this.local_data = JSON.parse(data);
        console.log(this.local_data);
        this.doAction();
      },
      (error) => {
        console.log(error);
        this.loading = 'failure';
      }
    )
  }

  submitCredentials() {
    this.loading = 'loading';
    this.service.postCredentials(this.local_data.id, this.local_data.credentials).subscribe(
      (data) => {
        console.log(data);
        this.local_data = JSON.parse(data);
        this.doAction();
      },
      (error) => {
        console.log(error);
        this.local_data = 'failure';
      }
    );
  }

  doAction(){
    this.dialogRef.close({ event:this.action, data: this.local_data });
  }

  closeDialog(){
    this.dialogRef.close({ event:'Cancel' });
  }

}
