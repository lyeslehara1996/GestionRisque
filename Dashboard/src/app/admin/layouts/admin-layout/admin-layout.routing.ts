import { Routes } from "@angular/router";
import { TableListComponent } from "../../table-list/table-list.component";
import { TypographyComponent } from "../../typography/typography.component";
import { NotificationsComponent } from "../../notifications/notifications.component";
import { DashboardComponent } from "app/admin/dashboard/dashboard.component";
import { AuthPermissionsGuard } from "app/_Guards/auth-permissions.guard";
import { AnalysePortfeuilleComponent } from "app/admin/risque-credit/analyse-portfeuille/analyse-portfeuille.component";
import { GestionDesResqueClientComponent } from "app/admin/risque-credit/gestion-des-resque-client/gestion-des-resque-client.component";
import { KRIsComponent } from "app/admin/risque-credit/kris/kris.component";
import { StressTestComponent } from "app/admin/risque-credit/stress-test/stress-test.component";
import { Top10Component } from "app/admin/risque-credit/top10/top10.component";
import { AnalysePortfeuilleDirectComponent } from "app/admin/risque-credit/analyse-portfeuille/analyse-portfeuille-direct/analyse-portfeuille-direct.component";
import { DurationComponent } from "app/admin/risque-credit/analyse-portfeuille/durations/duration.component";
import { CreationDouteuseComponent } from "app/admin/risque-credit/analyse-portfeuille/creation-douteuse/creation-douteuse.component";
import { ActionDeRecouvermentComponent } from "app/admin/risque-credit/analyse-portfeuille/action-de-recouverment/action-de-recouverment.component";

import { HasRoleGuard } from "app/_Guards/has-role.guard";
import { GestionUtilisateurComponent } from "app/admin/gestion-Role-Et-Utilisateur/gestion-utilisateur/gestion-utilisateur.component";
import { GestionRolesComponent } from "app/admin/gestion-Role-Et-Utilisateur/gestion-roles/gestion-roles.component";
import { GestionPermissionsComponent } from "app/admin/gestion-Role-Et-Utilisateur/gestion-permissions/gestion-permissions.component";
import { AnalysePortfeuilleInDirectComponent } from "app/admin/risque-credit/analyse-portfeuille/analyse-portfeuille-in-direct/analyse-portfeuille-in-direct.component";
import { ListeUtilisateursComponent } from "app/admin/Gestion-role-et-utilisateur/gestion-utilisateur/liste-utilisateurs/liste-utilisateurs.component";
import { AjouterDesUtilisateusComponent } from "app/admin/Gestion-role-et-utilisateur/gestion-utilisateur/ajouter-des-utilisateus/ajouter-des-utilisateus.component";
import { ModifierUtilisateursComponent } from "app/admin/Gestion-role-et-utilisateur/gestion-utilisateur/modifier-utilisateurs/modifier-utilisateurs.component";
import { HasPermissionGuardChild } from "app/_Guards/has-permission-child.guard";

export const AdminLayoutRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: DashboardComponent,
      },
    ],
  },
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "",
    children: [
      {
        path: "GestionUtilisateur",
        component: GestionUtilisateurComponent,
        children: [
          {
            path: "ListeUtilisateurs",
            component: ListeUtilisateursComponent,
           
          },
          {
            path: "AjouterDesUtilisateurs",
            component: AjouterDesUtilisateusComponent,
          },
          {
            path: "ModifierDesUtilisateurs",
            component: ModifierUtilisateursComponent,
          },
        ],
      },
      {
        path: "GestionDesRoles",
        component: GestionRolesComponent,
      },
      {
        path: "GestionDesPermission",
        component: GestionPermissionsComponent,
      },
    ],
  },
  {
    path: "",
    children: [
      {
        path: "AnalysePortfeuille",
        component: AnalysePortfeuilleComponent,
        children: [
          {
            path: "Portfeuilledirect",
            component: AnalysePortfeuilleDirectComponent,
          },
          {
            path: "AnalysePortfeuilleInDirect",
            component: AnalysePortfeuilleInDirectComponent,
          },
          {
            path: "Duration",
            component: DurationComponent,
          },
          {
            path: "CreationDuteuse",
            component: CreationDouteuseComponent,
          },
          {
            path: "ActionDeRecouverment",
            component: ActionDeRecouvermentComponent,
          },
        ],
      },
      {
        path: "RisqueClient",
        component: GestionDesResqueClientComponent,
      },
      {
        path: "KRIs",
        component: KRIsComponent,
      },
      {
        path: "StressTest",
        component: StressTestComponent,
      },
      {
        path: "Top10",
        component: Top10Component,
      },
    ],
  },
  //   {
  //     path: '',
  //     canActivate : [AuthPermissionsGuard],
  //     data :{
  //    expectedPermission:['ConsulterRessources']
  //  },
  //     children: [
  //       {
  //       path: 'AnalyseDesDepots',
  //       // component:
  //     },
  //     {
  //       path: 'AnalyseQualitativeETQuantitative',
  //       // component:
  //     },
  //     {
  //       path: 'KRIs',
  //       // component: ,
  //     },
  //     {
  //       path: 'StressTest',
  //       // component:
  //     },
  //     {
  //       path: 'SurveillanceDeLaTreoserie',
  //       // component:
  //     },
  //   ]
  //     },
  //   {
  //     path: '',
  //     canActivate : [AuthPermissionsGuard],
  //     data :{
  //    expectedPermission:['ConsulterRessources']
  //  },
  //     children: [
  //       {
  //       path: 'EvaluationDesTAuxDeCharges',
  //       // component:
  //     },
  //     {
  //       path: 'SurveillanceDesSessionsDevise',
  //       // component:
  //     },
  //     {
  //       path: 'KRIs',
  //       // component: ,
  //     },
  //     {
  //       path: 'StressTest',
  //       // component:
  //     },

  //   ]
  //     },

  // { path: '',       component: DashboardComponent ,canActivate : [AuthPermissionsGuard],
  //  data :{
  //    expectedPermission:['ConsulterRessources']
  // } },
  // { path: 'Dashboard',      component: DashboardComponent },
  // { path: 'user-profile',   component:UserProfileComponent },
  // { path: 'table-list',     component: TableListComponent },
  // { path: 'typography',     component: TypographyComponent },

  // { path: 'RisqueCredit',  children: [
  //      {
  //           path: 'upgrade',
  //           component: RisqueCreditComponent
  //       }

  //     ]

  //     },
  // { path: 'risqueMarche', component: RisqueDeMarcheComponent  },
  // { path: 'risqueLiqudite', component: RisqueLiquiditeComponent  },

  // { path: 'icons',          component: IconsComponent  },
  // { path: 'maps',           component: MapsComponent },
  // { path: 'notifications',  component: NotificationsComponent },
  // { path: 'upgrade',        component: UpgradeComponent },
];
