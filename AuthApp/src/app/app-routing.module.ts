import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGGuard } from './_Guards/auth-g.guard';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'login',
    component: AdminComponent,
  },
  {
    path: 'Admin',
    component: AdminComponent,
    canActivate: [AuthGGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
