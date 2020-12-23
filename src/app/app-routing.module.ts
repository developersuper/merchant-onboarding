import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { MerchantBoardComponent } from './modules/merchant/merchant-board/merchant-board.component';

import { OAuthGuard } from './core/guards';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    canActivate: [OAuthGuard],
    children: [
      {
        path: '',
        component: MerchantBoardComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
