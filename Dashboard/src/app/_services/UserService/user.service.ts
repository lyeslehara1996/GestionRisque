import { Injectable } from '@angular/core';
import { HttpClient,HttpEvent,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AppUser } from '../../Models/AppUser';
import { StorageSService } from '../storageService/storage-s.service';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  PATH_API='http://localhost:8085/api/';


 
  constructor(private httpClient: HttpClient,private storageSer:StorageSService) { }

  
  httpOptions:any = {
    headers: new Headers({ 
      'Content-Type': 'application/json',
      'Authorization':"Bearer "+ this.storageSer.getToken(),

     })
  };
//get users methode 

  public getAllUsers()
  {    return this.httpClient.get<AppUser[]>(this.PATH_API+"user");
  }

  //add Users methode
  public AddUsers( appUser:Object) {
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
