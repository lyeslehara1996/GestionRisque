import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  of } from 'rxjs';
import { AppUser } from 'src/app/Models/AppUser';
import * as uuid from "uuid";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private AUTH_API = 'http://localhost:8085/Auth/signin';

  private Refresh_Auth ='http://localhost:8085/Auth/refreshToken';


    Requestheaders= new HttpHeaders({ 'No-auth': 'True' });
   httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
authenticationUser : AppUser | undefined;

  constructor(    private http: HttpClient) { 
  }

  public Login(Data:any) {
    return this.http.post(this.AUTH_API,Data,this.httpOptions);
  }

public GetRefresh(jwtToken:string){
  return this.http.post(this.Refresh_Auth,{
    jwt_refresh_tocken: jwtToken
  }, this.httpOptions);
}




public logout(){
  this.authenticationUser = undefined;
  localStorage.removeItem("authUser");
  return of(true);
}


}
