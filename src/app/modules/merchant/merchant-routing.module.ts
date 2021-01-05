import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantAddPaypageComponent } from './merchant-add-paypage/merchant-add-paypage.component';
import { MerchantEditComponent } from './merchant-edit/merchant-edit.component';
import { MerchantInfoComponent } from './merchant-info/merchant-info.component';
import { MerchantViewComponent } from './merchant-view/merchant-view.component';
import { MerchantConfigComponent } from './merchant-config/merchant-config.component';
import { MerchantStylesheetComponent } from './merchant-stylesheet/merchant-stylesheet.component';
import { MerchantTermsAndConditionsComponent } from './merchant-terms-and-conditions/merchant-terms-and-conditions.component';
import { MerchantLogoComponent } from './merchant-logo/merchant-logo.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'view'
  },
  {
    path: 'view',
    component: MerchantViewComponent,
  }, 
  {
    path: 'add-paypage',
    component: MerchantAddPaypageComponent,
  },
  {
    path: 'edit-paypage/:id',
    component: MerchantEditComponent,
    children: [
      {
        path: 'info',
        component: MerchantInfoComponent
      },
      {
        path: 'config',
        component: MerchantConfigComponent
      },
      {
        path: 'stylesheet',
        component: MerchantStylesheetComponent
      },
      {
        path: 'termsAndConditions',
        component: MerchantTermsAndConditionsComponent
      },
      {
        path: 'logo',
        component: MerchantLogoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule { }