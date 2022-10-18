import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatMenuModule} from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table' 

import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ListUserComponent } from './layout/list-user/list-user.component';
import { AddUserComponent } from './layout/add-user/add-user.component';
import { AddRoleComponent } from './layout/add-role/add-role.component';
import { AddRoleToUserComponent } from './layout/add-role-to-user/add-role-to-user.component';
import { authInterceptorProviders } from '../_helpper/AuthInterceptor';
@NgModule({
  declarations: [
    NavBarComponent,
     LayoutComponent,
     ListUserComponent,
     AddUserComponent,
     AddRoleComponent,
     AddRoleToUserComponent
  ],
  imports: [
    DashboardModule,
    CommonModule,
    AdminRoutingModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule
    
  ],
    

  providers: [authInterceptorProviders],
})
export class AdminModule { }
