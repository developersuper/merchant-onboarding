import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { AppHeaderComponent } from './layouts/app-header/app-header.component';
import { AppFooterComponent } from './layouts/app-footer/app-footer.component';
import { MerchantModule } from './modules/merchant/merchant.module';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    AppHeaderComponent,
    AppFooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    MerchantModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
