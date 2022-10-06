import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../_services/AuthService/auth-service.service';

@Injectable({
  providedIn: 'root'
})


export class AuthGGuard implements CanActivate {

  constructor(private router :Router, private authservice: AuthServiceService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
        let authenticated = this.authservice.isAuthenticated();

        if(authenticated == false){
          this.router.navigateByUrl("/login");
          return false;

        }else{
          return true;
        }
    }
  


}
