import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AppUser } from 'src/app/Models/AppUser';
import { StorageSService } from '../storageService/storage-s.service';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  PATH_API='http://localhost:8085/api/';


 
  constructor(private httpClient: HttpClient,private storageSer:StorageSService) { }

  
  httpOptions:any = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization':"Bearer "+ this.storageSer.getToken(),

     }),
     responseType: 'text' as 'json'
  };
//get users methode 

  public getUsers() {
    return this.httpClient.get(this.PATH_API+"user",this.httpOptions );
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
