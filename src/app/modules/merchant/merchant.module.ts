import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';

import { SharedModule } from '../../shared/shared.module';

import { MerchantRoutingModule } from './merchant-routing.module';

import { MerchantBoardComponent } from './merchant-board/merchant-board.component';
import { MerchantTableComponent } from './merchant-board/merchant-table/merchant-table.component';
import { MerchantDialogBoxComponent } from './merchant-board/merchant-table/merchant-dialog-box/merchant-dialog-box.component';
import { MerchantViewComponent } from './merchant-view/merchant-view.component';
import { MerchantAddPaypageComponent } from './merchant-add-paypage/merchant-add-paypage.component';
import { MerchantEditComponent } from './merchant-edit/merchant-edit.component';
import { MerchantInfoComponent } from './merchant-info/merchant-info.component';
import { MerchantConfigComponent } from './merchant-config/merchant-config.component';
import { MerchantStylesheetComponent } from './merchant-stylesheet/merchant-stylesheet.component';
import { MerchantTermsAndConditionsComponent } from './merchant-terms-and-conditions/merchant-terms-and-conditions.component';
import { MerchantLogoComponent } from './merchant-logo/merchant-logo.component';

@NgModule({
  declarations: [
    MerchantBoardComponent,
    MerchantTableComponent,
    MerchantDialogBoxComponent,
    MerchantViewComponent,
    MerchantAddPaypageComponent,
    MerchantEditComponent,
    MerchantInfoComponent,
    MerchantConfigComponent,
    MerchantStylesheetComponent,
    MerchantTermsAndConditionsComponent,
    MerchantLogoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MerchantRoutingModule
  ],
  exports: [
    MerchantBoardComponent,
    MatTableModule
  ]
})
export class MerchantModule { }
