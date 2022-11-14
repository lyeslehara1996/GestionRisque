import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { AdminLayoutRoutes } from 'app/admin/layouts/admin-layout/admin-layout.routing';
import { User } from 'app/Models/User.model';
import { StorageSService } from 'app/_services/storageService/storage-s.service';

@Component({
  selector: 'app-navigation-utilisateur',
  templateUrl: './navigation-utilisateur.component.html',
  styleUrls: ['./navigation-utilisateur.component.css']
})
export class NavigationUtilisateurComponent implements OnInit {
  protected menuItems = [
    {
      menuItem: 'List Des Utilisateurs',
      
      path: 'ListeUtilisateurs',
     
    },
    {
      menuItem: 'Ajouter Des Utilisateurs',
      path: 'AjouterDesUtilisateurs',
      
    },
    {
      menuItem: 'Modifier Des Utilisateurs',
      path: 'ModifierDesUtilisateurs/:id',

    },
  ]

  constructor(private storage:StorageSService) { }

  ngOnInit(): void {
    console.log(this.getItems())
  }

  getItems() {
   let user = (new User(this.storage.getUser()))
   let routes = [...AdminLayoutRoutes]
   let flattenedRoutes = this.getFlattenedRoutesArray(routes)
   let items = this.menuItems.filter(item => {
    return flattenedRoutes.find(route => {
      if (route.path === item. path) {
        let routePermission = route?.data?.requiredPermission
        if (routePermission && !user.hasPermission(routePermission)) {
          return false;
        }
        return true;
      }
      return false;
    }) ? true : false
   })
   return items
   
  }

  getFlattenedRoutesArray(routes:Route[]) {
    let newRoutes = []
    routes.forEach(route => {
      if (route.children) {
        newRoutes = [...newRoutes, ...this.getFlattenedRoutesArray(route.children)] 
      } else {
        newRoutes.push(route)
      }
    })
    return newRoutes
  }

}
