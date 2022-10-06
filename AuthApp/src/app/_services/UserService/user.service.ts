import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AppUser } from 'src/app/Models/AppUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  PATH_API='http://localhost:8085/api/';

   requestHeader =new HttpHeaders(
    {"No-Auth":"true"}
   );
 
  constructor(private httpClient: HttpClient) { }

//get users methode 

  public getUsers(url:any):Observable <any> {
    return this.httpClient.get(this.PATH_API+"users");
  }

  //add Users methode
  public AddUsers( appUser:Object):Observable <any> {
    return this.httpClient.get(this.PATH_API+"Adduser",appUser);
  }


  //get roles methode 
  public getRoles(url:any):Observable <any> {
    return this.httpClient.get(this.PATH_API+"Roles");
  }

  // add role methode 
  public AddRoles(url:any):Observable <any> {
    return this.httpClient.get(this.PATH_API+"AddRole");
  }

  //add role to user methode 




  
}
