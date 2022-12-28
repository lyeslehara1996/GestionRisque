import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppPageHomeComponent } from './app-page-home/app-page-home.component';
import { AuthGGuard } from './_Guards/auth-g.guard';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ConfirmationPasswordComponent } from './confirmation-password/confirmation-password.component';

import { PortefeuilDirectComponent } from './admin/risque-credit/analyse-portfeuille/portefeuil-direct/portefeuil-direct.component';
import { PortefeuilIndirectComponent } from './admin/risque-credit/analyse-portfeuille/analyse-portfeuille-in-direct/portefeuil-indirect/portefeuil-indirect.component';

const routes: Routes =[
  {
    path: 'Home',
    redirectTo: '',
    component : AppPageHomeComponent
  },
  {
    path: 'ForgotPassword',
    component : ForgotPasswordComponent
  },
  {
    path: 'ResetPassword/:token',
    component : ConfirmationPasswordComponent
  },
  {
    path: '',
    component: AppPageHomeComponent,
  },

  { path: 'portefeuil-indirect', component: PortefeuilIndirectComponent },
  { path: 'portefeuil-direct', component: PortefeuilDirectComponent },
 


  {
    path: '',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGGuard],
    
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
