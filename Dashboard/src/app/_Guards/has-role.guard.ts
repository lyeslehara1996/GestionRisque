import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { StorageSService } from 'app/_services/storageService/storage-s.service';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {
  constructor(private router :Router, private storages: StorageSService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 
    return this.HasRole(route);
  }
  private HasRole (route :ActivatedRouteSnapshot ):boolean{
    if (!this.storages.userHasRole('admin')) {
      alert('Not authorized')
      return false
    }

    return true
  }
}













