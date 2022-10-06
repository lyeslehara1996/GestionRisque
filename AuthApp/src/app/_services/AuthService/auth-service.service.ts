import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { AppUser } from 'src/app/Models/AppUser';
import * as uuid from "uuid";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private AUTH_API = 'http://localhost:8085/Auth/signin';
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
users :AppUser[] =[];

authenticationUser : AppUser | undefined;

  constructor(    private http: HttpClient) { 
    this.users.push({userid:"1",nameUser:"doe",username:"user1",password:"1234",roles:["Admin"]})
    this.users.push({userid:"2",nameUser:"doe",username:"user4",password:"12345",roles:["Utilisateur"]})
    this.users.push({userid:"3",nameUser:"doe",username:"user2",password:"12346",roles:["Admin"]})

  }

  Login(username: string, password: string): Observable<any> {
    return this.http.post(this.AUTH_API , {
      username,
      password
    }, this.httpOptions);
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
