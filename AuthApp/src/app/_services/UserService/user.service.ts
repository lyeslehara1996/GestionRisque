import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  PATH_API='http://localhost:8085/';

   requestHeader =new HttpHeaders(
    {"No-Auth":"true"}
   );
 
  constructor(private httpClient: HttpClient) { }

//get users methode 

  public getUsers(url:any):Observable <any> {
    return this.httpClient.get(this.PATH_API+"api/user");
  }

  //add Users methode
  public AddUsers(url:any):Observable <any> {
    return this.httpClient.get(this.PATH_API+"api/user");
  }


  //get roles methode 
  public getRoles(url:any):Observable <any> {
    return this.httpClient.get(this.PATH_API+"api/user");
  }

  // add role methode 
  public AddRoles(url:any):Observable <any> {
    return this.httpClient.get(this.PATH_API+"api/user");
  }

  //add role to user methode 




  
}
