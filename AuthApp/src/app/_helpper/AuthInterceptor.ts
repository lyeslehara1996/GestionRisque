
import {HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Router, Routes } from "@angular/router";
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { AuthServiceService } from "../_services/AuthService/auth-service.service";
import { StorageSService } from "../_services/storageService/storage-s.service";
import { EventBusService } from "../_Shared/event-bus.service";
import { EventData } from "../_Shared/event.class";

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private isRefreshing = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  
    constructor(private router:Router, private http: HttpClient, private tokenService: StorageSService, private authService: AuthServiceService, private eventBusService:EventBusService) { }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<Object>> {
      let authReq = req;
      const accesstoken = this.tokenService.getToken();
      if (accesstoken != null) {
        authReq = this.addTokenHeader(req, accesstoken);



      }
  
      return next.handle(authReq).pipe(catchError(error => {
   
        if (error instanceof HttpErrorResponse && !authReq.url.includes('auth/signin') && error.status === 401) {
         // return this.handle401Error(authReq, next);
          //this.isRefreshing = false;
              this.tokenService.signOut();
               this.router.navigateByUrl('/Signin')
        }

        return throwError(error);
    
      }));
    }
    
    private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
      if (!this.isRefreshing) {
        this.isRefreshing = true;
  
        const refreshToken = this.tokenService.getRefreshToken();
       
        if (refreshToken)
        
          this.authService.GetRefresh();
//il s'arrete ici le probleme est dans la methode refreshToken 

          // return this.http.get("http://localhost:8085/Auth/RefreshToken",{
          //   'headers':{
          //     'Authorization':'Bearer ' + this.tokenService.getRefreshToken()
          //   }
          // }).pipe(
           
          //   switchMap((res: any) => {
          //     debugger;
          //     this.isRefreshing = false;
          //     console.log(res.jwt_access_tocken)
          //     this.tokenService.saveToken(res.jwt_access_tocken);
          //     this.refreshTokenSubject.next(res.jwt_access_tocken);
              
          //     return next.handle(this.addTokenHeader(request, res.jwt_access_tocken));
          //   }),

          //   catchError((err) => {
          //     debugger;
          //     this.isRefreshing = false;
          //     this.tokenService.signOut();
          //     this.router.navigateByUrl('/Signin')
          //     return throwError(err);
          //   })
          // );
      }

  this.isRefreshing = false
      return this.refreshTokenSubject.pipe(
        filter(token => token !== null),
        take(1),
        switchMap((token) => next.handle(this.addTokenHeader(request, token)))
      );
    }
  
    private addTokenHeader(request: HttpRequest<any>, token: string) {

       return request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });

    }

    /*
    private handle401Errores(request: HttpRequest<any>, next: HttpHandler) {
        if (!this.isRefreshing) {
          this.isRefreshing = true;
          const token = this.tokenService.getRefreshToken();
          if (token)
          if (this.tokenService.isLoggedIn()) {
            return this.authService.GetRefresh().pipe(
              switchMap(() => {
                this.isRefreshing = false;
    
                return next.handle(request);
              }),
              catchError((error) => {
                this.isRefreshing = false;
    
                if (error.status == '403') {
                  this.eventBusService.emit(new EventData('logout', null));
                }
    
                return throwError(() => error);
              })
            );
          }
        }
    
        return next.handle(request);
      }
*/



    }

  
  export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ];