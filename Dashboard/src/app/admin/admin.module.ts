import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';

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

import { GestionUtilisateurComponent } from './gestion-Role-Et-Utilisateur/gestion-utilisateur/gestion-utilisateur.component';
import { GestionRolesComponent } from './gestion-Role-Et-Utilisateur/gestion-roles/gestion-roles.component';
import { ListeUtilisateursComponent } from './Gestion-role-et-utilisateur/gestion-utilisateur/liste-utilisateurs/liste-utilisateurs.component';
import { AjouterDesUtilisateusComponent } from './Gestion-role-et-utilisateur/gestion-utilisateur/ajouter-des-utilisateus/ajouter-des-utilisateus.component';
import { UpdateUserModalComponent } from './gestion-role-et-utilisateur/gestion-utilisateur/update-user-modal/update-user-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListsRolesComponent } from './gestion-role-et-utilisateur/gestion-roles/lists-roles/lists-roles.component';
import { AjouterDesRolesComponent } from './gestion-role-et-utilisateur/gestion-roles/ajouter-des-roles/ajouter-des-roles.component';
import { ModalUpdateRoleComponent } from './gestion-role-et-utilisateur/gestion-roles/modal-update-role/modal-update-role.component';
import { TauxDefautChartComponent } from './risque-credit/analyse-portfeuille/creation-douteuse/taux-defaut-chart/taux-defaut-chart.component';
import { ImpayeMilliardsChartComponent } from './risque-credit/analyse-portfeuille/creation-douteuse/impaye-milliards-chart/impaye-milliards-chart.component';
import { CreanceDouteuseEtProvisionChartComponent } from './risque-credit/analyse-portfeuille/creation-douteuse/creance-douteuse-et-provision-chart/creance-douteuse-et-provision-chart.component';
import { ActionJusticeComponent } from './risque-credit/analyse-portfeuille/action-justice/action-justice.component';
import { ListpermissionComponent } from './gestion-role-et-utilisateur/gestion-roles/listpermission/listpermission.component';
import { AddPermissionComponent } from './gestion-role-et-utilisateur/gestion-roles/add-permission/add-permission.component';
import { AjouterAgenceComponent } from './gestion-role-et-utilisateur/gestion-utilisateur/ajouter-agence/ajouter-agence.component';
import { ListAgencesComponent } from './gestion-role-et-utilisateur/gestion-utilisateur/list-agences/list-agences.component';
import { AjouterNiveauComponent } from './gestion-role-et-utilisateur/gestion-roles/ajouter-niveau/ajouter-niveau.component';
import { ListNiveauComponent } from './gestion-role-et-utilisateur/gestion-roles/list-niveau/list-niveau.component';
import { UpdateAgenceComponent } from './gestion-role-et-utilisateur/gestion-utilisateur/update-agence/update-agence.component';
import { UpdateNiveauComponent } from './gestion-role-et-utilisateur/gestion-roles/update-niveau/update-niveau.component';



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

    GestionUtilisateurComponent,
    GestionRolesComponent,
    ListeUtilisateursComponent,
    AjouterDesUtilisateusComponent,
    UpdateUserModalComponent,
    ListsRolesComponent,
    AjouterDesRolesComponent,
    ModalUpdateRoleComponent,
    TauxDefautChartComponent,
    ImpayeMilliardsChartComponent,
    CreanceDouteuseEtProvisionChartComponent,
    ActionJusticeComponent,
    NavigationMenuComponent,
    ListpermissionComponent,
    AddPermissionComponent,
    AjouterAgenceComponent,
    ListAgencesComponent,
    AjouterNiveauComponent,
    ListNiveauComponent,
    UpdateAgenceComponent,
    UpdateNiveauComponent

  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
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
