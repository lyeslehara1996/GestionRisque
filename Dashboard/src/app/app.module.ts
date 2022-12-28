import { UpdateUserModalComponent } from './admin/gestion-role-et-utilisateur/gestion-utilisateur/update-user-modal/update-user-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { AppPageHomeComponent } from './app-page-home/app-page-home.component';

import { MatInputModule } from '@angular/material/input';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { authInterceptorProviders } from './_helpper/AuthInterceptor';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ConfirmationPasswordComponent } from './confirmation-password/confirmation-password.component';

import { PortefeuilIndirectComponent } from './admin/risque-credit/analyse-portfeuille/analyse-portfeuille-in-direct/portefeuil-indirect/portefeuil-indirect.component';
import { EngagementsComponent } from './admin/risque-credit/analyse-portfeuille/analyse-portfeuille-in-direct/portefeuil-indirect/engagements/engagements.component';
import { EvolutionComponent } from './admin/risque-credit/analyse-portfeuille/analyse-portfeuille-in-direct/portefeuil-indirect/evolution/evolution.component';
import { CreditNetComponent } from './admin/risque-credit/analyse-portfeuille/portefeuil-direct/credit-net/credit-net.component';
import { ParTypeEngagementComponent } from './admin/risque-credit/analyse-portfeuille/portefeuil-direct/par-type-engagement/par-type-engagement.component';
import { EvolutionDirectComponent } from './admin/risque-credit/analyse-portfeuille/portefeuil-direct/evolution-direct/evolution-direct.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PortefeuilDirectComponent } from './admin/risque-credit/analyse-portfeuille/portefeuil-direct/portefeuil-direct.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
   ReactiveFormsModule, 
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    MatInputModule,
    MatPseudoCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,

  ],
  declarations: [
    AppComponent,
    AppPageHomeComponent,
    ForgotPasswordComponent,
    ConfirmationPasswordComponent,
    PortefeuilIndirectComponent,
    EngagementsComponent,
    EvolutionComponent,
    PortefeuilDirectComponent,
    CreditNetComponent,
    ParTypeEngagementComponent,
    EvolutionDirectComponent,

  ],
  providers: [authInterceptorProviders],  entryComponents: [UpdateUserModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
