import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { OauthConnectService } from './authentication';
import { MerchantService } from './http';
import { OAuthGuard } from './guards';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    MerchantService,
    OauthConnectService,
    OAuthGuard
  ]
})
export class CoreModule { }
