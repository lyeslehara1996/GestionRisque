import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router'; 
const routes: Routes= [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},

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
