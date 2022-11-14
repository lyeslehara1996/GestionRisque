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

  public getAllUsers():Observable<HttpEvent<AppUser[]>>
  {    return this.httpClient.get<AppUser[]>(this.PATH_API+"user",this.httpOptions);
  }

  
  public getUser(id:number):Observable<HttpEvent<AppUser[]>>
  {    return this.httpClient.get<AppUser[]>(this.PATH_API+`/user${id}`,this.httpOptions);
  }

  //add Users methode
  public AddUsers( appUser:Object) {
    return this.httpClient.get(this.PATH_API+"Adduser",appUser);
  }

  public UpdateUsers(){

    
  }

  public DeleteUser(user:AppUser){
return this.httpClient.delete(this.PATH_API+`user/delete/${user.id}`, this.httpOptions)
  }



  //get roles methode 
  public getAllRoles(url:any) {
    return this.httpClient.get(this.PATH_API+"roles",this.httpOptions);
  }

    public getRole(url:any) {
    return this.httpClient.get(this.PATH_API+"roles",this.httpOptions);
  }

  public UpdateRole(url:any) {
    return this.httpClient.get(this.PATH_API+"roles",this.httpOptions);
  }

  
  

  // add role methode 
  public AddRoles(url:any) {
    return this.httpClient.get(this.PATH_API+"AddRole",this.httpOptions);
  }

  //add role to user methode 




  
}
