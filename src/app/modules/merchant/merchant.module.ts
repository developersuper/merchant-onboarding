import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';

import { SharedModule } from '../../shared/shared.module';

import { MerchantBoardComponent } from './merchant-board/merchant-board.component';
import { MerchantTableComponent } from './merchant-board/merchant-table/merchant-table.component';
import { MerchantDialogBoxComponent } from './merchant-board/merchant-table/merchant-dialog-box/merchant-dialog-box.component';

@NgModule({
  declarations: [
    MerchantBoardComponent,
    MerchantTableComponent,
    MerchantDialogBoxComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule
  ],
  exports: [
    MerchantBoardComponent,
    MatTableModule
  ]
})
export class MerchantModule { }
