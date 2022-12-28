import { Component, OnInit } from '@angular/core';
import { StorageSService } from 'app/_services/storageService/storage-s.service';
import { UserService } from 'app/_services/UserService/user.service';
import {  Router } from '@angular/router';
import { User } from 'app/Models/User.model';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    children ?: children[];
    forAdmin ?: boolean;
}
declare interface children {
  path : string;
  title ?:string;
}
export const ROUTES: RouteInfo[] = [
 
    // { path: '/Admin/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '', forAdmin: true, title: 'Gestion Administateur',  icon: 'admin_panel_settings', class: '', children :[ 
      {
              path: '/Admin/GestionUtilisateur',
              title:'Gestion Des Utilisateur'
          },
        
         {
              path: '/Admin/GestionDesRoles',
              title:'Gestion Des Roles'
          },
     
                ]
        
        },
    { path: 'RisqueCredit', title: 'Risque Credit',  icon:'payments', class: '', children :[ 
      {
              path: '/Admin/AnalysePortfeuille',
              title:'AnalysePortfeuille'
          },
          {
            path: '/Admin/RisqueClient',
            title:'Gestion des risques clients'
        },
          {
            path: '/Admin/KRIs',
            title:'Gestion des KRIs'
        },
          {
            path: '/Admin/StressTest',
            title:'Gestion des StressTest'
        },
          {
            path: '/Admin/Top10',
            title:'Gestion des Top10'
        },
        ] },
    { path: '', title: 'Risque Liquidite',  icon:'Task', class: '', children :[ 
      {
              path: '/Admin/AnalyseDesDepots',
              title:'Analyse Des Depots'
          },
          {
            path: '/Admin/AnalyseQualitativeETQuantitative',
            title:'Analyse Qualitative ET Quantitative'
        },
          {
            path: '/Admin/KRIsLiQuidite',
            title:'Gestion des KRIs'
        },
          {
            path: '/Admin/StressTestLiquidite',
            title:'Gestion des StressTest Liquidite'
        },
          {
            path: '/Admin/SurveillanceDeLaTreoserie',
            title:'Gestion des  Surveillance De La Treoserie'
        },
        ] },
    { path: '', title: 'Risque De Charge',  icon:'Task', class: '', children :[ 
      {
              path: '/Admin/EvaluationDesTAuxDeCharges',
              title:'Gestion D Evaluation Des Taux De Charges'
          },
          {
            path: '/Admin/SurveillanceDesSessionsDevise',
            title:'Surveillance Des Cessions Devise'
        },
          {
            path: '/Admin/KRIsDeCharge',
            title:'Gestion des KRIs De Charge'
        },
          {
            path: '/Admin/StressTestDeCharge',
            title:'Gestion des Stress Test De Charge'
        }
        ] },
    { path: '', title: 'Risque De Marche',  icon:'Task', class: '', children :[ 
      {
              path: '/Admin/Invertissements',
              title:'Gestion De Invertissements'
          },
          {
            path: '/Admin/LimitesBanque',
            title:'Les Limites de Banques'
        },
          {
            path: '/Admin/NotionsBanques',
            title:'Gestion des Notions des banques '
        },
          {
            path: '/Admin/NotionsPays',
            title:'Gestion des Notions Pays'
        }
        ] },

   
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  isLoggedIn = true;
  roles: string[] = [];
  username ?:string;
  errorMessage = '';
  users ?:any|null=null 
  constructor( private router: Router, private storageSer:StorageSService,private userService:UserService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };



  onLoggedout(){
    if(this.isLoggedIn == true){
        this.storageSer.signOut();
        this.router.navigateByUrl('/Home');
        this.isLoggedIn=false
      }else{
        this.storageSer.signOut();
        this.router.navigate(['/Home']);
      }
}
onclicksubmenu(event: any){
  event.preventDefault()
  let submenu = event.target.parentElement.parentElement.querySelector('.collapse')
  submenu.classList.toggle('show')
  submenu.parentElement.querySelector('span').classList.toggle('rotate')
  document.querySelectorAll('.submenu').forEach(function (item) {
    if (item !== submenu) {
      item.classList.remove('show'); 
      item.parentElement.querySelector('span').classList.remove('rotate')}
  })
  // console.log(event.target)
}

getRoutes() {
  let user = new User(this.storageSer.getUser());
  let IsAdmine = user.hasRole('Admin')
  //let isAdmin = this.storageSer.userIsAdmin()
  return ROUTES.filter(item => !IsAdmine && item.forAdmin ? false : true )
}
}
