import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { Routes, RouterModule } from '@angular/router'; 
import { PageNotFoundComponent } from 'src/page-not-found/page-not-found.component';
const routes: Routes= [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:HomeComponent},
  {path:'Admin',component:AdminComponent},
  {
    path: '**',
    component: PageNotFoundComponent,
  },

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],  
  exports: [RouterModule]
})
export class AppRoutingModule { }