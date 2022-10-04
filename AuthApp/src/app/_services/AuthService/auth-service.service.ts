import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { AppUser } from 'src/app/Models/AppUser';
import * as uuid from "uuid";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
users :AppUser[] =[];
authenticationUser : AppUser | undefined;

  constructor() { 
    this.users.push({userid:"1",username:"user1",password:"1234",roles:["Admin"]})
    this.users.push({userid:"2",username:"user4",password:"12345",roles:["Utilisateur"]})
    this.users.push({userid:"3",username:"user2",password:"12346",roles:["Admin"]})

  }

public login(username:string,password:string):Observable<AppUser>{
  let AppUser = this.users.find(u => u.username == username);
  if(!AppUser) return throwError(()=> new Error("user not found"));
  if(AppUser.password !== password ) {
    return  throwError(()=> new Error("user password incorrect "));

  }
  return of(AppUser);
}

public authenticationUsers(appuser: AppUser):Observable<Boolean>{
  this.authenticationUser = appuser;
  localStorage.setItem('authUser',JSON.stringify({username:appuser.username,password:appuser.password,roles:appuser.roles,jwt:"JWT_TOCKEN"}));
  return of(true);
}

public hasRole(role :string):boolean {
  return this.authenticationUser!.roles.includes(role);
  
}

public logout(){
  this.authenticationUser = undefined;
  localStorage.removeItem("authUser");
  return of(true);
}

public isAuthenticated(){
  return this.authenticationUser!=undefined;
}
}
