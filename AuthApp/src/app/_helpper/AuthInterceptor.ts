
import {HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
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
  
    constructor(private tokenService: StorageSService, private authService: AuthServiceService, private eventBusService:EventBusService) { }
  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<Object>> {
        req = req.clone({
            withCredentials: true,
          });
  
          return next.handle(req).pipe(
            catchError((error) => {
              if (
                error instanceof HttpErrorResponse &&
                !req.url.includes('auth/signin') &&
                error.status === 401
              ) {
                return this.handle401Errores(req, next);
              }
      
              return throwError(() => error);
            })
          );
        }
  
    private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
      if (!this.isRefreshing) {
        this.isRefreshing = true;
        this.refreshTokenSubject.next(null);
  
        const token = this.tokenService.getRefreshToken();
  
        if (token)
          return this.authService.GetRefresh(token).pipe(
            switchMap((token: any) => {
              this.isRefreshing = false;
  
              this.tokenService.saveToken(token.accessToken);
              this.refreshTokenSubject.next(token.accessToken);
              
              return next.handle(this.addTokenHeader(request, token.accessToken));
            }),
            catchError((err) => {
              this.isRefreshing = false;
              
              this.tokenService.signOut();
              return throwError(err);
            })
          );
      }
  
      return this.refreshTokenSubject.pipe(
        filter(token => token !== null),
        take(1),
        switchMap((token) => next.handle(this.addTokenHeader(request, token)))
      );
    }
  
    private addTokenHeader(request: HttpRequest<any>, token: string) {

       return request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });

    }

    private handle401Errores(request: HttpRequest<any>, next: HttpHandler) {
        if (!this.isRefreshing) {
          this.isRefreshing = true;
          const token = this.tokenService.getRefreshToken();
          if (token)
          if (this.tokenService.isLoggedIn()) {
            return this.authService.GetRefresh(token).pipe(
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
    }

  
  export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: false }
  ];