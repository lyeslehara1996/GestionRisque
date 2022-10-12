import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGGuard } from './_Guards/auth-g.guard';
const routes: Routes = [

  {
    path: '',
    loadChildren : () =>
    import('./signin/signin.module').then((s)=> s.SigninModule),
  },
  /*
  { path: 'home', component: HomeComponent },
  /*
  {
    path: 'login',
    component: AdminComponent,
  },
  */
  {

    path: 'Admin',
    loadChildren: () =>
    import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGGuard],
  
  },
  {
    path: 'Signin',
    loadChildren : () =>
    import('./signin/signin.module').then((s)=> s.SigninModule),
  },
  
  /*
  {

    path: 'Login',
    loadChildren: () =>
    import('./login/login.module').then((m) => m.LoginModule),
  
  },
  */
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
