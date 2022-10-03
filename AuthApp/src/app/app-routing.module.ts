import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { Routes, RouterModule } from '@angular/router'; 
const routes: Routes= [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'Admin',component:AdminComponent},
  {path:'User',component:UserComponent},
  {path:'forbiden',component:UserComponent},

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
