import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { MerchantBoardComponent } from './modules/merchant/merchant-board/merchant-board.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';

import { OAuthGuard } from './core/guards';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'merchants'
  },
  // {
  //   path: '',
  //   component: AppLayoutComponent,
  //   canActivate: [OAuthGuard],
  //   children: [
  //     {
  //       path: '',
  //       component: MerchantBoardComponent,
  //     },
  //   ]
  // },
  {
    path: 'merchants',
    canActivate: [OAuthGuard],
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './modules/merchant/merchant.module#MerchantModule'
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
