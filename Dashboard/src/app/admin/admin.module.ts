import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MatInputModule } from '@angular/material/input';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ComponentsModule } from './components/components.module';
import { RisqueLiquiditeComponent } from './risque-liquidite/risque-liquidite.component';
import { RisqueDeChangeComponent } from './risque-de-change/risque-de-change.component';
import { RisqueDeMarcheComponent } from './risque-de-marche/risque-de-marche.component';
import { AnalysePortfeuilleComponent } from './risque-credit/analyse-portfeuille/analyse-portfeuille.component';
import { GestionDesResqueClientComponent } from './risque-credit/gestion-des-resque-client/gestion-des-resque-client.component';
import { KRIsComponent } from './risque-credit/kris/kris.component';
import { StressTestComponent } from './risque-credit/stress-test/stress-test.component';
import { Top10Component } from './risque-credit/top10/top10.component';
import { AnalysePortfeuilleDirectComponent } from './risque-credit/analyse-portfeuille/analyse-portfeuille-direct/analyse-portfeuille-direct.component';
import { AnalysePortfeuilleInDirectComponent } from './risque-credit/analyse-portfeuille/analyse-portfeuille-in-direct/analyse-portfeuille-in-direct.component';
import { DurationComponent } from './risque-credit/analyse-portfeuille/durations/duration.component';
import { CreationDouteuseComponent } from './risque-credit/analyse-portfeuille/creation-douteuse/creation-douteuse.component';
import { ActionDeRecouvermentComponent } from './risque-credit/analyse-portfeuille/action-de-recouverment/action-de-recouverment.component';
import { authInterceptorProviders } from 'app/_helpper/AuthInterceptor';
import { AnalyseDesDepotsComponent } from './risque-liquidite/analyse-des-depots/analyse-des-depots.component';
import { AnalyseQualitativeEtQuantitativeComponent } from './risque-liquidite/analyse-qualitative-et-quantitative/analyse-qualitative-et-quantitative.component';
import { KRisLiquiditeComponent } from './risque-liquidite/kris-liquidite/kris-liquidite.component';
import { StressTestLiquiditeComponent } from './risque-liquidite/stress-test-liquidite/stress-test-liquidite.component';
import { SurveillenceDeTreoserieComponent } from './risque-liquidite/surveillence-de-treoserie/surveillence-de-treoserie.component';
import { EvaluationTauxChangeComponent } from './risque-de-change/evaluation-taux-change/evaluation-taux-change.component';
import { SurveillanceDeCessionsDeviseComponent } from './risque-de-change/surveillance-de-cessions-devise/surveillance-de-cessions-devise.component';
import { KRIsDeChangeComponent } from './risque-de-change/kris-de-change/kris-de-change.component';
import { StrsseTestDeChangeComponent } from './risque-de-change/strsse-test-de-change/strsse-test-de-change.component';
import { LimitesBanquesComponent } from './risque-de-marche/limites-banques/limites-banques.component';
import { InvertissementsComponent } from './risque-de-marche/invertissements/invertissements.component';
import { NotionsPaysComponent } from './risque-de-marche/notions-pays/notions-pays.component';
import { NotionsBanquesComponent } from './risque-de-marche/notions-banques/notions-banques.component';
import { AnalysePortfeuilleContentComponent } from './risque-credit/Analyse-portfeuille/analyse-portfeuille-content/analyse-portfeuille-content.component';

import { GestionUtilisateurComponent } from './gestion-Role-Et-Utilisateur/gestion-utilisateur/gestion-utilisateur.component';
import { GestionRolesComponent } from './gestion-Role-Et-Utilisateur/gestion-roles/gestion-roles.component';
import { GestionPermissionsComponent } from './gestion-Role-Et-Utilisateur/gestion-permissions/gestion-permissions.component';
import { NavigationUtilisateurComponent } from './gestion-role-et-utilisateur/gestion-utilisateur/navigation-utilisateur/navigation-utilisateur.component';
import { ListeUtilisateursComponent } from './Gestion-role-et-utilisateur/gestion-utilisateur/liste-utilisateurs/liste-utilisateurs.component';
import { AjouterDesUtilisateusComponent } from './Gestion-role-et-utilisateur/gestion-utilisateur/ajouter-des-utilisateus/ajouter-des-utilisateus.component';
import { ModifierUtilisateursComponent } from './Gestion-role-et-utilisateur/gestion-utilisateur/modifier-utilisateurs/modifier-utilisateurs.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
  
    RisqueLiquiditeComponent,
    RisqueDeChangeComponent,
    RisqueDeMarcheComponent,
    AnalysePortfeuilleComponent,
    GestionDesResqueClientComponent,
    KRIsComponent,
    StressTestComponent,
    Top10Component,
    AnalysePortfeuilleDirectComponent,
    AnalysePortfeuilleInDirectComponent,
    DurationComponent,
    CreationDouteuseComponent,
    ActionDeRecouvermentComponent,
    AnalyseDesDepotsComponent,
    AnalyseQualitativeEtQuantitativeComponent,
    KRisLiquiditeComponent,
    StressTestLiquiditeComponent,
    SurveillenceDeTreoserieComponent,
    EvaluationTauxChangeComponent,
    SurveillanceDeCessionsDeviseComponent,
    KRIsDeChangeComponent,
    StrsseTestDeChangeComponent,
    LimitesBanquesComponent,
    InvertissementsComponent,
    NotionsPaysComponent,
    NotionsBanquesComponent,
    AnalysePortfeuilleContentComponent,

    GestionUtilisateurComponent,
    GestionRolesComponent,
    GestionPermissionsComponent,
    NavigationUtilisateurComponent,
    ListeUtilisateursComponent,
    AjouterDesUtilisateusComponent,
    ModifierUtilisateursComponent,

  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CommonModule,
    MatInputModule,
    MatPseudoCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    ComponentsModule
  ],
  providers: [authInterceptorProviders],

})
export class AdminModule { }
