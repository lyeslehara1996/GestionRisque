import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { ListUserComponent } from './layout/list-user/list-user.component';

const routes: Routes = [
  {
    
      path: '',
      component: LayoutComponent,
    },
    {path: "listUser", component:ListUserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
